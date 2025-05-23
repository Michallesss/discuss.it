'use client'
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { DevTool } from "@hookform/devtools";
// Components
import Form from "../_layout/Form";
import ErrorMessage from "../_components/ErrorMessage";
import SubmitButton from "../_components/SubmitButton";
// Schemas
import type { registerType } from "@/schemas/auth.schemas";
import { registerSchema } from "@/schemas/auth.schemas";
// Actions
import { registerAction } from "@/actions/auth.actions";

export default function RegisterPage() {
  const { register, handleSubmit, /*control,*/ formState: { errors, isSubmitting } } = useForm<registerType>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    }
  });

  return (
    <Form label="Create an account">
      <form onSubmit={handleSubmit(registerAction)} className="space-y-4 md:space-y-6" action="#">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
            email</label>
          <ErrorMessage error={errors.email} />
          <input {...register('email')} type="email" id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com" required />
        </div>
        <div>
          <label htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <ErrorMessage error={errors.password} />
          <input type="password" id="password" placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required />
        </div>
        <div>
          <label htmlFor="confirm-password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
          <ErrorMessage error={errors.confirmPassword} />
          <input type="password" id="confirm-password" placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required />
        </div>
        {/* <div className="flex items-start">
          <div className="flex items-center h-5">
            <input id="terms" aria-describedby="terms" type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              required />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a
                className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and
                Conditions</a></label>
          </div>
        </div> */}
        <SubmitButton loading={isSubmitting} text="Create an account" />
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account? <Link href="/login"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
        </p>
        {/* <DevTool control={control} /> */}
      </form>
    </Form>
  );
}