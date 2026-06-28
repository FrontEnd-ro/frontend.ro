import get from 'lodash/get';
import set from 'lodash/set';
import { env } from '../client/services/env';
import { connectToDb } from './db';
import Tidbit, { sanitizeTidbit } from '../server/tidbit/tidbit.model';
import { Presentation } from '../server/presentation/presentation.schema';
import { ApplicationConfigModel } from '../server/application-config/application-config.schema';
import { API_TidbitI } from '../shared/types/tidbit.types';
import { PresentationI } from '../shared/types/presentation.types';
import { ApplicationConfig } from '../shared/types/application-config.types';

/**
 * Read-only content accessors backed directly by MongoDB.
 *
 * These replace the old Express read endpoints (`/api/tidbits`,
 * `/api/presentations`). They are called from `getServerSideProps` (server
 * only) and from the thin `pages/api/*` wrappers used by the client. All
 * write paths (view counters) have been removed for the archive.
 */

const DEFAULT_LANGUAGE = env.LANGUAGE;

/** Ensure values handed to Next.js props are plain JSON (no ObjectId/Date instances). */
function serialize<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

export async function getTidbits(
  fields: string[] = [],
  language: 'ro' | 'en' = DEFAULT_LANGUAGE,
): Promise<Partial<API_TidbitI>[]> {
  await connectToDb();
  const tidbits = await Tidbit.find({ language }).sort('-createdDate');
  const sanitized = tidbits.map(sanitizeTidbit);

  if (fields.length === 0) {
    return serialize(sanitized);
  }

  // Mirror the old API's `?field=` projection (Lodash get/set paths).
  const projected = sanitized.map((tidbit) => {
    const out: Partial<API_TidbitI> = {};
    fields.forEach((field) => {
      const value = get(tidbit, field);
      if (value !== undefined) {
        set(out, field, value);
      }
    });
    return out;
  });

  return serialize(projected);
}

export async function getTidbitById(
  tidbitId: string,
  language: 'ro' | 'en' = DEFAULT_LANGUAGE,
): Promise<API_TidbitI | null> {
  await connectToDb();
  const tidbit = await Tidbit.findOne({ tidbitId, language });
  return tidbit ? serialize(sanitizeTidbit(tidbit)) : null;
}

export async function getTidbitSides(
  currentTidbitId: string,
  language: 'ro' | 'en' = DEFAULT_LANGUAGE,
): Promise<{ previous: API_TidbitI | null; next: API_TidbitI | null } | null> {
  await connectToDb();
  const tidbits = await Tidbit.find({ language }).sort('-createdDate');
  const indexOf = tidbits.findIndex((tidbit) => tidbit.tidbitId === currentTidbitId);

  if (indexOf === -1) {
    return null;
  }

  return serialize({
    previous: indexOf > 0 ? sanitizeTidbit(tidbits[indexOf - 1]) : null,
    next: indexOf < tidbits.length - 1 ? sanitizeTidbit(tidbits[indexOf + 1]) : null,
  });
}

export async function getPresentations(): Promise<PresentationI[]> {
  await connectToDb();
  const presentations = await Presentation.find({}).lean();
  return serialize(presentations);
}

export async function getPresentationById(presentationId: string): Promise<PresentationI | null> {
  await connectToDb();
  const presentation = await Presentation.findOne({ presentationId }).lean();
  return presentation ? serialize(presentation) : null;
}

const EMPTY_APPLICATION_CONFIG: ApplicationConfig = { ad: undefined, navItems: [] };

export async function getApplicationConfig(): Promise<ApplicationConfig> {
  await connectToDb();
  const config = await ApplicationConfigModel.findOne().lean();
  return config ? serialize(config) : EMPTY_APPLICATION_CONFIG;
}
