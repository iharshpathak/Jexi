import { clerkMiddleware , createRouteMatcher } from '@clerk/nextjs/server';

const isPrivateRoute = createRouteMatcher([
  '/book-now(.*)',
  '/pay(.*)',
  '/payment(.*)',
  '/booking-successful(.*)',
  '/paymentSuccess(.*)',
  '/view-booking(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (isPrivateRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};

