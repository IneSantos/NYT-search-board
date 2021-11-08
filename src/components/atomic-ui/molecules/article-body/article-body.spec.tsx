import React from "react";
import { render } from "@testing-library/react";
import ArticleBody from "./article-body";

describe("ArticleBody component tests", () => {
  test(`ArticleBody component render`, () => {
    const { container } = render(
      <ArticleBody description={"This is an description"} webURL={"/"} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
