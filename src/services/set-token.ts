import { cookies } from "next/headers";

export async function setAuthToken(token: string) {
  const cookieStore = await cookies();
  return cookieStore.set("access_token", token, { secure: process.env.NODE_ENV === "production" });
}