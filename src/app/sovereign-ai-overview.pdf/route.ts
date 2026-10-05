import { NextResponse } from "next/server";

export function GET(request: Request) {
  return NextResponse.redirect(new URL("/ai-in-a-box-overview.pdf", request.url), 308);
}
