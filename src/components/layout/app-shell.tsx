import type { ReactNode } from "react";
import { brand } from "@/config/brand";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-card">
        <div className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between px-6">
          <a className="flex items-center gap-3" href="/" aria-label={`${brand.productName} home`}>
            <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
              C
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold leading-5">{brand.productName}</span>
              <span className="block text-xs leading-5 text-muted-foreground">{brand.fullName}</span>
            </span>
          </a>
          <nav aria-label="Primary navigation">
            <a className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" href="/status">
              Status
            </a>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-6 py-10">{children}</main>
    </div>
  );
}
