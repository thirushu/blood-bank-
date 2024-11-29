// import { prisma } from '../../lib/prisma';
import prisma from "@/app/lib/prisma";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password, name, phone, address } = req.body;

    try {
      // Create a new admin user with isAdmin set to true
      const newUser = await prisma.user.create({
        data: {
          email,
          password,
          name,
          phone,
          address,
          isAdmin: true,  // Set admin flag
          role: 'ADMIN',  // Explicitly set role to ADMIN
          adminSince: new Date(),  // Timestamp when admin status is granted
        },
      });

      return res.status(201).json({ success: true, user: newUser });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Error creating user' });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
