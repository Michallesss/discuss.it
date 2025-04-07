'use server'
import type { loginType, registerType } from "@/schemas/auth.schemas";
import { instance } from "@/lib/instance";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function loginAction(data: loginType) {
  const cookieStore = await cookies();

  try {
    const response = await instance.post("/auth/login", data); // TODO try catch

    console.log(response);
    cookieStore.set("access_token", response.data.access_token, { secure: process.env.NODE_ENV === "production" });
    redirect("/");
  } catch (error) {
    console.log(error); // TODO send error to frontend
  }
}

export async function registerAction(data: registerType) {
  const cookieStore = await cookies();
  
  try {
    const response = await instance.post("/auth/register", data); // TODO try catch

    cookieStore.set("access_token", response.data.access_token, { secure: process.env.NODE_ENV === "production" });
    redirect("/");
  } catch (error) {
    console.log(error); // TODO send error to frontend
  }
}