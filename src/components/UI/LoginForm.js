"use client";

import { Button, Input } from "antd";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import AuthModal from "./AuthModal";

export function LoginForm({ className, ...props }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <AuthModal >
      <div className={"grid gap-6"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <level className=" text-sm " htmlFor="email">
                Email
              </level>
              <Input
                className="bg-indigo-100 p-2 font-medium "
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-sm mt-1 text-red-900">
                  {errors.email.message}
                </p>
              )}
              <level className="mt-2 text-sm " htmlFor="email">
                Password
              </level>
              <Input
                className="bg-indigo-100 p-2 font-medium "
                id="password"
                placeholder="password"
                minLength={6}
                type="password"
                autoCapitalize="none"
                autoCorrect="off"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-sm mt-1 text-red-900">
                  {errors.password.message}
                </p>
              )}
            </div>
            <Button className="mt-4 bg-sky-600 hover:bg-green-700">
              Create Account
            </Button>
          </div>
        </form>
        <div className="flex">
          <p className="text-sm">Create Eco-book account?</p>
          <Link href="/" className="ml-2 text-sm underline">
            sign up
          </Link>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 border-r-2">
              Or continue with
            </span>
          </div>
        </div>

        <Button
          type="button"
          className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-500"
        >
          <FcGoogle size={20} />
          <p>Google</p>
        </Button>
      </div>
    </AuthModal>
  );
}
