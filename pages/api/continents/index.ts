import type { NextApiRequest, NextApiResponse } from 'next';

import { continents } from '../../../data';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(continents);
}
