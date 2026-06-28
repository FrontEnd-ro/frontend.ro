import type { NextApiRequest, NextApiResponse } from 'next';
import { getTidbitSides } from '../../../../lib/content';
import { API_TidbitI } from '../../../../shared/types/tidbit.types';

/**
 * Read-only endpoint backing the tidbit viewer's previous/next navigation.
 * Replaces the old Express route `GET /api/tidbits/:id/sides`.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ previous: API_TidbitI | null; next: API_TidbitI | null } | { message: string }>,
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const tidbitId = Array.isArray(req.query.tidbitId) ? req.query.tidbitId[0] : req.query.tidbitId;

  if (!tidbitId) {
    res.status(400).json({ message: 'Missing tidbitId' });
    return;
  }

  try {
    const sides = await getTidbitSides(tidbitId);
    if (sides === null) {
      res.status(404).json({ message: 'Tidbit not found' });
      return;
    }
    res.status(200).json(sides);
  } catch (err) {
    console.error('[api/tidbits/:id/sides]', err);
    res.status(500).json({ message: 'Something went wrong' });
  }
}
