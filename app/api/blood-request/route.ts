import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    // Parse the JSON body from the request
    const { name, email, bloodGroup } = await req.json();

    // Validate input fields
    if (!name || !email || !bloodGroup) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // Check if the user exists in the database
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // If user is not found, return an appropriate error response
    if (!user) {
      return NextResponse.json(
        { message: "User not found. Please register first." },
        { status: 404 }
      );
    }

    // Create a new blood request and link it to the user
    const bloodRequest = await prisma.bloodRequest.create({
      data: {
        name,
        email,
        bloodGroup,
        userId: user.id, // Link the blood request to the user
      },
    });

    // Respond with success and return the created blood request
    return NextResponse.json(
      {
        message: "Blood request submitted successfully.",
        bloodRequest,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating blood request:", error);
    return NextResponse.json(
      {
        message: "An error occurred while submitting the request.",
      },
      { status: 500 }
    );
  }
}
