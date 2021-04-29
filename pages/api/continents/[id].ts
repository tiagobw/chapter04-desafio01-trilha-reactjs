import type { NextApiRequest, NextApiResponse } from 'next'

import { continents } from '../../../data'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id;
  const filtered = continents.filter((continent) => continent.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `Continent id: ${id} was not found` })
  }
}
