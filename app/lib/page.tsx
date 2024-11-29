// lib/roles.js

// Middleware to check if the user has a required role
export const checkRole = (requiredRole) => {
    return async (req, res, next) => {
      const { user } = req;  // Assuming the user is attached to the request object after authentication (via session or JWT)
  
      if (!user || !user.role || user.role !== requiredRole) {
        return res.status(403).json({ error: "Access denied" });
      }
  
      next();  // Allow the request to proceed if the role matches
    };
  };
  