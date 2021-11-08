import reducer from "./reducer";

let initialState =  {
    articleList: [],
    page: 0,
    searchClicked: false
}

describe("reducer tests", () => {
  test(`reducer default value`, () => {
    expect(reducer(initialState, {
        //@ts-ignore
        type: "DEFAULT"
    })).toBe(initialState);
  });

  test(`reducer setting article list value`, () => {
      const article = {
        id: "",
        headline: "",
        abstract: "", 
        keywords: [],
        section: "",
        snippet: "",
        pub_date: "",
        source: "",
        web_url: ""
    }
    expect(reducer(initialState, {
        type: "SET_ARTICLE_LIST",
        payload: [article]
    })).toStrictEqual({
        articleList: [article],
        page: 0,
        searchClicked: false
    });
  });

  test(`reducer next page value`, () => {
    expect(reducer(initialState, {
        type: "SET_NEXT_PAGE"
    })).toStrictEqual({
        articleList: [],
        page: 1,
        searchClicked: false
    });
  });

  test(`reducer previous page value`, () => {
    expect(reducer(initialState, {
        type: "SET_PREV_PAGE"
    })).toStrictEqual({
        articleList: [],
        page: 0,
        searchClicked: false
    });
  });

  test(`reducer search click value`, () => {
    expect(reducer(initialState, {
        type: "SEARCH_CLICKED"
    })).toStrictEqual({
        articleList: [],
        page: 0,
        searchClicked: true
    });
  });


  test(`reducer reset search click value`, () => {
    const state = reducer(initialState, {
        type: "SEARCH_CLICKED"
    });
    expect(reducer(state, {
        type: "RESET_SEARCH_CLICKED"
    })).toStrictEqual({
        articleList: [],
        page: 0,
        searchClicked: false
    });
  });
});
