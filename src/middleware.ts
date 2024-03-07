import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

//const isProtected = createRouteMatcher("/dashboard(.*)");
const isPublicRoute = createRouteMatcher(["/contact"])

export default clerkMiddleware((auth, request) => {
  if (isPublicRoute(request)) return;
  auth().protect();

});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next)._)', '/', '/(api|trpc)(._)']
}