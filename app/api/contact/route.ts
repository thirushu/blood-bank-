import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming request body
    const { name, email, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // Mock sending email or saving to a database
    console.log("Received contact form submission:", {
      name,
      email,
      subject,
      message,
    });

    // Respond with success
    return NextResponse.json(
      { message: "Your message has been sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling contact form submission:", error);

    // Handle unexpected errors
    return NextResponse.json(
      { message: "There was an error processing your request." },
      { status: 500 }
    );
  }
}
