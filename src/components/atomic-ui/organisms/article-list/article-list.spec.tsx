import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import ArticlesList from "./article-list";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";

let store;
let mockedStore;

const mockedArticleList = [
  {
    id: "",
    headline: "",
    abstract: "",
    keywords: [],
    section: "",
    snippet: "",
    pub_date: "",
    source: "",
    web_url: "",
  },
];

describe("ArticlesList component tests", () => {
  test(`ArticlesList component render`, () => {
    mockedStore = configureStore();
    store = mockedStore({
      article: {
        articleList: [
          {
            id: "",
            headline: "",
            abstract: "",
            keywords: [],
            section: "",
            snippet: "",
            pub_date: "",
            source: "",
            web_url: "",
          },
        ],
        page: 0,
        searchClicked: false,
      },
    });

    const { container } = render(
      <Router>
        <Provider store={store}>
          <ArticlesList articles={mockedArticleList} />
        </Provider>
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
