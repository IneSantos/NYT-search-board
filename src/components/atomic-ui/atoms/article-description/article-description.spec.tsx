import React from "react";
import { render } from "@testing-library/react";
import ArticleDescription from "./article-description";

describe("ArticleDescription atom tests", () => {
  test(`ArticleDescription component render`, () => {
    const { container } = render(
      <ArticleDescription description="This is a description" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
