import { Activity, CheckCircle2, Database, ShieldCheck } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { appEnvironment } from "@/config/environment";
import type { FoundationStatusItem } from "@/types/status";

const statusItems: FoundationStatusItem[] = [
  {
    label: "Frontend foundation",
    value: "System ready",
    icon: CheckCircle2,
  },
  {
    label: "Environment",
    value: appEnvironment.appEnv,
    icon: Activity,
  },
  {
    label: "Supabase integration",
    value: "Not connected",
    icon: Database,
  },
  {
    label: "Secrets",
    value: "Managed through local env files",
    icon: ShieldCheck,
  },
];

export function StatusPage() {
  return (
    <AppShell>
      <section className="max-w-3xl">
        <p className="text-sm font-medium uppercase text-muted-foreground">Foundation status</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-normal text-foreground">
          {appEnvironment.appName}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">{appEnvironment.appFullName}</p>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
          The application shell is ready for the next implementation phase. Business workflows and
          backend integrations are intentionally outside this initial foundation.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <a href="/status">Health status</a>
          </Button>
        </div>
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-2" aria-label="Foundation checks">
        {statusItems.map((item) => {
          const Icon = item.icon;

          return (
            <article key={item.label} className="rounded-md border bg-card p-5 text-card-foreground">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-secondary text-secondary-foreground">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-sm font-medium text-muted-foreground">{item.label}</h2>
                  <p className="mt-1 text-base font-semibold">{item.value}</p>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </AppShell>
  );
}
