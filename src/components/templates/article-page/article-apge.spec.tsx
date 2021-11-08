import React from "react";
import { render } from '@testing-library/react';
import ArticlePage from "./article-page";

const mockedArticle = {
    id: "",
    headline: "",
    abstract: "", 
    keywords: [],
    section: "",
    snippet: "",
    pub_date: "",
    source: "",
    web_url: ""
};


describe("ArticlePage atom tests", () => {
  test(`ArticlePage component render`, () => {
    const { container } = render(
      <ArticlePage article={mockedArticle}/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
