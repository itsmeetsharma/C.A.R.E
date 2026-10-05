import { brand } from "@/config/brand";

type AppEnvironment = {
  appName: string;
  appFullName: string;
  appEnv: string;
  apiBaseUrl: string | null;
  supabaseUrl: string | null;
  supabaseAnonKey: string | null;
};

function emptyToNull(value: string | undefined) {
  return value && value.trim().length > 0 ? value : null;
}

export const appEnvironment: AppEnvironment = {
  appName: import.meta.env.VITE_APP_NAME || brand.productName,
  appFullName: import.meta.env.VITE_APP_FULL_NAME || brand.fullName,
  appEnv: import.meta.env.VITE_APP_ENV || "local",
  apiBaseUrl: emptyToNull(import.meta.env.VITE_API_BASE_URL),
  supabaseUrl: emptyToNull(import.meta.env.VITE_SUPABASE_URL),
  supabaseAnonKey: emptyToNull(import.meta.env.VITE_SUPABASE_ANON_KEY),
};
