export const getUserFromDb = async (user: string, passwordHash: string) => {
  // This is a placeholder for the actual database logic.
  // In a real application, you would query your database to find the user.
  // For example, using Prisma or any other ORM:
  // return await prisma.user.findUnique({ where: { email, passwordHash } });

  // Simulating a user lookup
  if (user === "test" && passwordHash === "random_saltpassword") {
    return {
      id: 1,
      name: "Test User",
      email: "test@test.com",
      image: "https://example.com/test-user.jpg",
    };
  }
  // If no user is found, return null
  return null;
};
