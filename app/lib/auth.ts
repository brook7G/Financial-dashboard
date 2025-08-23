
import { betterAuth } from "better-auth";

import { authClient } from "./auth-client"; // Adjust the path as needed

const betterAuthResult = betterAuth({
    ...authClient,
});

// Access properties that exist on betterAuthResult, for example:
export const { handler, api } = betterAuthResult;