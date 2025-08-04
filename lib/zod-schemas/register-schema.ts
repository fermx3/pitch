import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string()
    .min(4, "El usuario debe tener más de 3 caracteres")
    .regex(/^[a-zA-Z0-9._]+$/, "Solo se permiten letras, números, punto y guion bajo"),
  name: z
    .string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "El nombre solo debe contener letras"),
  email: z.email("Correo electrónico inválido"),
  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .max(20, "La contraseña debe tener máximo 20 caracteres")
    .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/, "La contraseña debe contener letras y números"),
});
