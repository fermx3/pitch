"use client";

import Button from "@/components/ui/button";
import { handleLoginSubmission } from "./handle-login-submission";
import { useActionState } from "react";

const initialState = { error:null };

const LoginForm = () => {
  const [formState, formAction] = useActionState(handleLoginSubmission, initialState);

  return (
    <div className="flex items-center justify-center p-6 sm:min-h-[80dvh]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form action={formAction} className="space-y-6">
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                required
              />
            </div>
          </div>
          <Button
            type="submit"
            className="rounded-lg mt-4"
            fullWidth
          >
            Login
          </Button>
          {formState?.error && (
            <p className="text-red-500 text-sm mt-2">
              {formState.error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
