// /pages/api/adminDashboard.ts
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const token = req.headers.authorization?.split(' ')[1]; // assuming Bearer token in Authorization header

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the user is an admin
    if (!decoded.isAdmin) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    // Admin-specific logic
    return res.status(200).json({ message: 'Welcome to the admin dashboard' });

  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}
