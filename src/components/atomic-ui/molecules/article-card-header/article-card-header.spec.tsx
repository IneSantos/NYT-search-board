import React from "react";
import { render } from '@testing-library/react';
import ArticleCardHeader from "./article-card-header";

describe("ArticleCardHeader component tests", () => {
  test(`ArticleCardHeader component render`, () => {
    const { container } = render(
      <ArticleCardHeader headline={"This is an headline"}/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
