import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import SearchInputBar from "./search-input-bar";

let store;
let mockedStore;

describe("SearchBar component tests", () => {
  test(`SearchBar component render`, () => {
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
      <Provider store={store}>
        <SearchInputBar
          searchInput="This is an input"
          handleSearch={jest.fn()}
        />
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
