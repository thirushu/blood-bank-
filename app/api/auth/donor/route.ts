import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

// Handle POST request for donor registration
export async function POST(req: NextRequest) {
  try {
    // Parse JSON request body
    const { name, email, bloodGroup } = await req.json();

    // Validate input data
    if (!name || !email || !bloodGroup) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingDonor = await prisma.donor.findUnique({
      where: { email },
    });

    if (existingDonor) {
      return NextResponse.json(
        { message: 'Email is already registered as a donor.' },
        { status: 400 }
      );
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

    return NextResponse.json(
      { message: 'Donor registered successfully!', donor },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error registering donor:', error);

    // Return specific error message for Prisma-related errors
    if (error.code === 'P2002') {
      return NextResponse.json(
        { message: 'Email already exists.' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: 'Internal Server Error',
        error: error.message || 'An unexpected error occurred.',
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// Default handler for unsupported HTTP methods
export async function handler(req: NextRequest) {
  return NextResponse.json(
    { message: `Method ${req.method} Not Allowed.` },
    { status: 405 }
  );
}
