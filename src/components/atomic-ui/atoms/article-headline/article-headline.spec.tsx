import React from "react";
import { render } from "@testing-library/react";
import ArticleHeadline from "./article-headline";

describe("ArticleHeadline atom tests", () => {
  test(`ArticleHeadline component render`, () => {
    const { container } = render(
      <ArticleHeadline headline="This is a headline" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
