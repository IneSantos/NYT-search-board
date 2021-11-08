import React from "react";
import { render } from "@testing-library/react";
import ArticleErrorPage from "./article-error-page";

describe("ArticleErrorPage component tests", () => {
  test(`ArticleErrorPage component render`, () => {
    const { container } = render(<ArticleErrorPage />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
