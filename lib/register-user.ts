import { prisma } from "./prisma";
import bcrypt from "bcryptjs";

export async function registerUser({username, name, email, password}:{
  username: string;
  name: string;
  email: string;
  password: string;
}) {

  try {
    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      throw new Error(`"${username}" ya esta registrado, intenta con otro nombre de usuario`);
    }

    // Check if the email already exists
    const existingEmail = await prisma.user.findUnique({
      where: { email },
    });
    if (existingEmail) {
      throw new Error(`"${email}" ya esta registrado, intenta con otro correo electrónico`);
    }

    // Hash the password with salt
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create the new user
    const newUser = await prisma.user.create({
      data: {
        username,
        name,
        email,
        password: hashedPassword,
      },
    })
    return newUser;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An error occurred during user registration"
    );
  }
}
