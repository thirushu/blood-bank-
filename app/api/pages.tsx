// pages/api/check-role.js

import { getSession } from "next-auth/react"; // or your preferred auth method
//import prisma from "@/lib/prisma";
import prisma from "../lib/prisma";
export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Get the user's role from the database
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json({ role: user.role });
}
