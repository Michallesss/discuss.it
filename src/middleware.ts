import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// Services
import { getUserMeLoader } from "@/services/get-user-me-loader";

export async function middleware(request: NextRequest) {
  const user = await getUserMeLoader();

  // Don't allow logged user to access sign page
  if (user.ok) return NextResponse.redirect(new URL("/", request.url));

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/login',
    '/register',
  ]
}