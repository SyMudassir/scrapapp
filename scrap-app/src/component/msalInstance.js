import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./authConfig"; // ✅ correct import path

export const msalInstance = new PublicClientApplication(msalConfig);
