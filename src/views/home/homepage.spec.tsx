import React from "react";
import { render } from '@testing-library/react';
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./homepage";

let store;
let mockedStore;

describe("HomePage component tests", () => {
  test(`HomePage component render`, () => {
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
                <HomePage/>
            </Provider>
        </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
