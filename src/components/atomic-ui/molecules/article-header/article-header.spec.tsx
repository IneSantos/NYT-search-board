import React from "react";
import { render } from '@testing-library/react';
import ArticleHeader from "./article-header";

describe("ArticleHeader component tests", () => {
  test(`ArticleHeader component render`, () => {
    const { container } = render(
      <ArticleHeader headline={"This is an headline"} date="21/11/2021"/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
