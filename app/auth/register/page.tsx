"use client";

import { useActionState } from "react";
import { useState } from "react";
import { handleRegister } from "./handle-register";
import Button from "@/components/ui/button";

const initialState = { error: null, success: null };

export default function RegisterPage() {
  const [formState, formAction] = useActionState(handleRegister, initialState);

  // Controla los valores de los inputs
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Limpia los campos solo si el registro fue exitoso
  if (formState.success) {
    setUsername("");
    setName("");
    setEmail("");
    setPassword("");
    formState.success = null; // Limpia el mensaje de éxito
    formState.error = null; // Limpia cualquier error previo
    window.location.href = "/auth/register/success";
  }

  return (
    <div className="flex items-center justify-center p-6 sm:min-h-[80dvh]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Registrarse</h2>
        <form className="flex flex-col gap-4" action={formAction}>
          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="username"
            >
              Usuario
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Elige un nombre de usuario único"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              required
              autoFocus
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Nombre completo
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre completo aquí"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Escribe tu correo electrónico"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Al menos 8 caracteres con letras y números"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              required
            />
          </div>
          <Button type="submit" className="rounded-lg mt-4">
            Registrarse
          </Button>
          {formState?.error && (
            <p className="text-red-500 text-sm mt-2">{formState.error}</p>
          )}
          {formState?.success && (
            <p className="text-green-600 text-sm mt-2">{formState.success}</p>
          )}
        </form>
      </div>
    </div>
  );
}
