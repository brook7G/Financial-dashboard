import { createAuthClient } from "better-auth/react";


export const authClient = createAuthClient( {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request }: { auth: { user?: unknown }; request: Record<string, unknown> }) {
      const isLoggedIn = !!auth?.user;
      const url = new URL(request.url as string, "http://localhost:3000");
      const isOnDashboard = url.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', url.origin));
      }
      return true;
    },
  },
  baseURL: "http://localhost:3000",
  providers: [], // Add providers with an empty array for now
})