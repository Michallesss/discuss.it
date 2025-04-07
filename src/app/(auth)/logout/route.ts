'use server'
import { deleteAuthToken } from "@/services/delete-token";
import { redirect } from "next/navigation";

export async function GET() {
  await deleteAuthToken();
  return new Response(redirect('/'));
}