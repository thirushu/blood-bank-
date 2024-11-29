// pages/api/requests/createRequest.js
import { getSession } from 'next-auth/react';
//import prisma from '@/lib/prisma';
import Joi from 'joi'; // Validation library
import prisma from '@/app/lib/prisma';
// Validation schema
const requestSchema = Joi.object({
  bloodType: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-').required(),
  quantity: Joi.number().min(1).required(),
  reason: Joi.string().max(255).required(), // Reason for the request
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get session and validate role
  const session = await getSession({ req });
  if (!session || !['donor', 'recipient'].includes(session.user.role)) {
    return res.status(403).json({ error: 'Access denied' });
  }

  try {
    // Validate request body
    const { bloodType, quantity, reason } = await requestSchema.validateAsync(req.body);

    // Create a new blood request in the database
    const newRequest = await prisma.request.create({
      data: {
        bloodType,
        quantity,
        reason,
        userId: session.user.id, // Assuming session includes user ID
      },
    });

    res.status(201).json({ message: 'Request created successfully', newRequest });
  } catch (error) {
    console.error('Error creating request:', error);
    res.status(400).json({ error: error.message || 'Failed to create request' });
  }
}
