import React from "react";
import { render } from '@testing-library/react';
import ArticleAction from "./article-action";

describe("ArticleAction atom tests", () => {
  test(`ArticleAction component render`, () => {
    const { container } = render(
      <ArticleAction name="ARTICLE ACTION"/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
