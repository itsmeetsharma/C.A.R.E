import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "@/app/app";

describe("App", () => {
  it("renders the C.A.R.E. foundation status page", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "C.A.R.E.", level: 1 })).toBeInTheDocument();
    expect(
      screen.getByText("Clinic Administration & Record Environment", { selector: "p" }),
    ).toBeInTheDocument();
    expect(screen.getByText("System ready")).toBeInTheDocument();
    expect(screen.getByText("Supabase integration")).toBeInTheDocument();
    expect(screen.getByText("Not connected")).toBeInTheDocument();
  });
});
