import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

import AsyncServerComponent from "./page";

describe("AsyncServerComponent", () => {
  it("renders posts from real API successfully", async () => {
    // Render the Async server component using real API call
    const component = await AsyncServerComponent();
    const { getByTestId, getByText } = render(component);

    // Check if the blog title is rendered
    expect(getByTestId("blog-title")).toHaveTextContent("Blog Posts");

    // Check if posts exist with their specific content
    expect(getByTestId("post-1")).toBeInTheDocument();
    expect(getByTestId("post-2")).toBeInTheDocument();

    // Verify specific post titles and content
    expect(getByTestId("post-title-1")).toHaveTextContent(
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    );
    expect(
      getByText(
        "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
      )
    ).toBeInTheDocument();

    expect(getByTestId("post-title-2")).toHaveTextContent("qui est esse");
    expect(
      getByText(
        "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
      )
    ).toBeInTheDocument();
  });
});
