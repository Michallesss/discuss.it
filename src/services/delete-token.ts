import { cookies } from "next/headers";

export async function deleteAuthToken() {
  const cookieStore = await cookies();
  return cookieStore.delete("access_token"); 
}