// Example: Create a new User with Prisma Client
import prisma from './lib/prisma'; // Assuming you have a prisma instance set up

// Create a new user
async function createUser() {
  try {
    // Assuming you want to create a new User with specific data
    const newUser = await prisma.user.create({
      data: {
        email: 'test@example.com',
        password: 'hashedPassword',  // Replace with a properly hashed password
        name: 'John Doe',
        isAdmin: true,  // Assuming `isAdmin` field is added to your User model
      },
    });

    // Output the created user to the console
    console.log('User created:', newUser);
  } catch (error) {
    console.error('Error creating user:', error);
  } finally {
    // Disconnect the Prisma client after the operation
    await prisma.$disconnect();
  }
}

// Run the function to create the user
createUser();
