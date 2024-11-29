import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

// Handle POST request for donor registration
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, bloodGroup } = req.body;

  // Validate input data
  if (!name || !email || !bloodGroup) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Check if email already exists
    const existingDonor = await prisma.donor.findUnique({
      where: { email },
    });

    if (existingDonor) {
      return res.status(400).json({ message: 'Email is already registered as a donor.' });
    }

    // Save donor data to the database
    const donor = await prisma.donor.create({
      data: {
        name,
        email,
        bloodGroup,
        donationDate: new Date(),
      },
    });

    return res.status(201).json({ message: 'Donor registered successfully!', donor });
  } catch (error: any) {
    console.error('Error registering donor:', error);
    return res.status(500).json({
      message: 'Internal Server Error',
      error: error.message || 'An unexpected error occurred.',
    });
  }
}

// Default handler for unsupported methods
export async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Allow', ['POST']);
  return res.status(405).json({ message: `Method ${req.method} Not Allowed.` });
}
