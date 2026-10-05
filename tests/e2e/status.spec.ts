import { expect, test } from "@playwright/test";

test("shows the foundation health status", async ({ page }) => {
  await page.goto("/status");

  await expect(page).toHaveTitle("C.A.R.E.");
  await expect(page.getByRole("heading", { name: "C.A.R.E." })).toBeVisible();
  await expect(
    page.getByRole("main").getByText("Clinic Administration & Record Environment"),
  ).toBeVisible();
  await expect(page.getByText("Frontend foundation")).toBeVisible();
  await expect(page.getByText("System ready")).toBeVisible();
  await expect(page.getByText("Not connected")).toBeVisible();
});
