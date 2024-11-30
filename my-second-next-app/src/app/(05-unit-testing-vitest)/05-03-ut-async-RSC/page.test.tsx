import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";
import AsyncServerComponent from "./page";

// Mock the fetch function
global.fetch = vi.fn();

describe("AsyncServerComponent", () => {
  const mockPosts = [
    {
      userId: 1,
      id: 1,
      title: "Test Post 1",
      body: "This is test post 1",
    },
    {
      userId: 2,
      id: 2,
      title: "Test Post 2",
      body: "This is test post 2",
    },
  ];

  // Reset the fetch mock before each test
  beforeEach(() => {
    (global.fetch as ReturnType<typeof vi.fn>).mockReset();
  });

  // This is to clean up the DOM after each test
  afterEach(() => {
    cleanup();
  });

  it("renders posts successfully", async () => {
    // Mock the fetch response
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => mockPosts,
    });

    // Render the Async server component
    const component = await AsyncServerComponent();
    const { getByTestId } = render(component);

    // Check if posts are rendered using data-testid
    expect(getByTestId("blog-title")).toHaveTextContent("Blog Posts");
    expect(getByTestId("post-1")).toBeInTheDocument();
    expect(getByTestId("post-2")).toBeInTheDocument();
    expect(getByTestId("post-title-1")).toHaveTextContent("Test Post 1");
    expect(getByTestId("post-title-2")).toHaveTextContent("Test Post 2");
  });

  it("handles fetch error", async () => {
    // Mock a failed fetch
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: false,
    });

    // Expect the component to throw an error
    await expect(AsyncServerComponent()).rejects.toThrow(
      "Failed to fetch posts"
    );
  });
});
