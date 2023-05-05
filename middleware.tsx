import { NextRequest, NextResponse } from "next/server";
// import type { NextMiddleware } from 'next/server';

export const config = {
  matcher: ["/dashboard/user", "/dashboard/:path*"],
  experimental: {
    allowMiddlewareResponseBody: true,
  },
};

function isAuthenticated(request: NextRequest): boolean {
  // Implement your authentication logic here.
  // For example, check for a session cookie or token.
  const sessionCookie = request.cookies.get("session");
  return !!sessionCookie;
}

export default function middleware(
  // req: { nextUrl: { pathname: string; origin: any; }; }
  req: NextRequest,
) {
  if (req.nextUrl.pathname === req.nextUrl.pathname.toLowerCase())
    return NextResponse.next();

  if (!isAuthenticated(req)) {
    return NextResponse.json(
      {
        success: false,
        message: "Auth failed",
      },
      {
        status: 401,
      },
    );
  }

  return NextResponse.redirect(
    new URL(req.nextUrl.origin + req.nextUrl.pathname.toLowerCase()),
  );
}
