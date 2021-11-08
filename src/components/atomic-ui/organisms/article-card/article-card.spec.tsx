import React from "react";
import { render } from '@testing-library/react';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import ArticleCard from "./article-card";

let store;
let mockedStore;

describe("ArticleCard component tests", () => {
  test(`ArticleCard component render`, () => {
    mockedStore = configureStore();
    store = mockedStore({  
        articleList: [{
            id: "",
            headline: "",
            abstract: "", 
            keywords: [],
            section: "",
            snippet: "",
            pub_date: "",
            source: "",
            web_url: ""
        }],
        page: 0,
        searchClicked: false
    });


    const { container } = render(
      <Router>
        <Provider store={store}>
          <ArticleCard headline="This is an headline" index={1}/>
        </Provider>
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
