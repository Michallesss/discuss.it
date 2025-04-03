import type { loginType, registerType } from "@/schemas/auth.schemas";
import { instance } from "@/lib/instance";
import { redirect } from "next/navigation";

export async function loginAction(data: loginType) {}

export async function registerAction(data: registerType) {}