// pages/api/inventory/update.js
import { getSession } from 'next-auth/react';
//import prisma from '@/lib/prisma'; // Assuming you're using Prisma ORM
import prisma from '@/app/lib/prisma';
import Joi from 'joi'; // Validation library

// Validation schema
const inventoryUpdateSchema = Joi.object({
  bloodType: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-').required(),
  quantity: Joi.number().min(0).required(),
});

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get session and validate role
  const session = await getSession({ req });
  if (!session || !['admin', 'staff'].includes(session.user.role)) {
    return res.status(403).json({ error: 'Access denied' });
  }

  try {
    // Validate request body
    const { bloodType, quantity } = await inventoryUpdateSchema.validateAsync(req.body);

    // Update inventory in the database
    const updatedInventory = await prisma.inventory.update({
      where: { bloodType },
      data: { quantity },
    });

    res.status(200).json({ message: 'Inventory updated successfully', updatedInventory });
  } catch (error) {
    console.error('Error updating inventory:', error);
    res.status(400).json({ error: error.message || 'Failed to update inventory' });
  }
}
