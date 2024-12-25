
import type { NextApiRequest, NextApiResponse } from 'next'

type Stats = {
  allTimeVolume: string
  totalDeposits: string
  totalUsers: string
  volumeBridged: string
  lastUpdated: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Stats>
) {
  // Mock data
  const stats = {
    allTimeVolume: "$547.6T",
    totalDeposits: "$11.8T",
    totalUsers: "$9.7T",
    volumeBridged: "$14.2T",
    lastUpdated: new Date().toISOString()
  }

  // Add artificial delay to simulate real API call
  setTimeout(() => {
    res.status(200).json(stats)
  }, 500)
}