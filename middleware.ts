import { NextRequest, NextResponse } from "next/server";

export function middleware(_: NextRequest) {
  console.log("Hello from middleware!");
  return NextResponse.next();
}

export const config = { matcher: "/default" };
