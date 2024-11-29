import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { name, email, bloodGroup, userId, patientId } = await req.json();

  // Validate input data
  if (!name || !email || !bloodGroup || !userId || !patientId) {
    return NextResponse.json(
      { message: 'All fields are required.' },
      { status: 400 } // Return a 400 Bad Request status
    );
  }

  try {
    // Save blood request to the database
    const bloodRequest = await prisma.bloodRequest.create({
      data: {
        name,
        email,
        bloodGroup,
        status: 'Pending', // Default status
        user: {
          connect: { id: userId } // Assuming user exists with this ID
        },
        patient: {
          connect: { id: patientId } // Assuming patient exists with this ID
        },
      },
    });

    return NextResponse.json(
      { message: 'Blood request created successfully!', bloodRequest },
      { status: 201 } // Return a 201 Created status
    );
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Error creating blood request:', err.message); // Now it's safe to access `err.message`
      return NextResponse.json(
        { message: 'Internal Server Error', error: err.message },
        { status: 500 } // Return a 500 Internal Server Error status
      );
    } else {
      console.error('Unknown error:', err);
      return NextResponse.json(
        { message: 'Internal Server Error', error: 'Unknown error occurred' },
        { status: 500 } // Return a 500 Internal Server Error status
      );
    }
  }
}
