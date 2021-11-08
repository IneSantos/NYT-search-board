import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render } from '@testing-library/react';
import SearchButton from "./search-button";

let store;
let mockedStore;

describe("SearchButton atom tests", () => {
  test(`SearchButton component render`, () => {
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
        <Provider store={store}>
          <SearchButton/>
        </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
