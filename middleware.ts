<<<<<<< HEAD
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)'])

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect()
})
=======
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// myapp.com/dashboard/*
const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) {
        auth.protect();
    }
});


>>>>>>> 62785052cf75ed507755181a49a430ae1eb9c025

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
<<<<<<< HEAD
}
=======
};
>>>>>>> 62785052cf75ed507755181a49a430ae1eb9c025
