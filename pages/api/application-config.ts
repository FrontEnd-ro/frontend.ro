import type { NextApiRequest, NextApiResponse } from 'next';
import { getApplicationConfig } from '../../lib/content';
import { ApplicationConfig } from '../../shared/types/application-config.types';

/**
 * Read-only endpoint serving the navigation config (and optional landing ad).
 * Replaces the old Express route `GET /api/application-config`. Used by the
 * client to keep the header nav populated across client-side navigations.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApplicationConfig | { message: string }>,
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  try {
    const config = await getApplicationConfig();
    res.status(200).json(config);
  } catch (err) {
    console.error('[api/application-config]', err);
    res.status(500).json({ message: 'Something went wrong' });
  }
}
