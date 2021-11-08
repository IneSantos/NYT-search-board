import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render } from '@testing-library/react';
import Pagination from "./pagination";

let store;
let mockedStore;

describe("Pagination component tests", () => {
  test(`Pagination component render`, () => {
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
            <Pagination/>
         </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
