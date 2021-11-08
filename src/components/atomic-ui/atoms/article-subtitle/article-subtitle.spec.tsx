import React from "react";
import { render } from '@testing-library/react';
import ArticleSubtitle from "./article-subtitle";

describe("ArticleSubtitle atom tests", () => {
  test(`ArticleSubtitle component render`, () => {
    const { container } = render(
      <ArticleSubtitle subtitle="This is a subtitle"/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
