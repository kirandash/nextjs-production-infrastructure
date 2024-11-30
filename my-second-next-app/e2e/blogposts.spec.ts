import { test, expect } from "@playwright/test";

test.describe("Blog Posts Page with Mock Data", () => {
  test.beforeEach(async ({ page }) => {
    // Intercept the API call and provide mock data
    // await page.route('https://jsonplaceholder.typicode.com/posts', async route => {
    //   await route.fulfill({
    //     path: './fixtures/posts.json'
    //   });
    // });

    await page.goto("/06-e2e-playwright-async-RSC");
  });

  test("should display blog posts from mock data", async ({ page }) => {
    // Look for specific text content
    await expect(page.getByText("qui est esse")).toBeVisible();
  });
});
