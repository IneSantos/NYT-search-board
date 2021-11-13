import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";
import ArticlePage from "./article-page";

let store;
let mockedStore;

describe("ArticlePage atom tests", () => {
  test(`ArticlePage component render`, () => {
    mockedStore = configureStore();
    store = mockedStore({
      article: {
        article: {
          id: "",
          headline: "This is a headline",
          abstract: "",
          keywords: [],
          section: "",
          snippet: "",
          pub_date: "",
          source: "",
          web_url: "",
        },
      },
    });

    const { container } = render(
      <Router>
        <Provider store={store}>
          <ArticlePage />
        </Provider>
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
