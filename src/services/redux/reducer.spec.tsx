import reducer from "./reducer";

const initialState = {
  articleList: [],
  page: -1,
  searchClicked: false,
  clearClicked: false,
  pageClicked: false,
  article: {
    id: "",
    headline: "",
    abstract: "",
    keywords: [
      {
        major: "",
        name: "",
        rank: 0,
        value: "",
      },
    ],
    section: "",
    snippet: "",
    pub_date: "",
    source: "",
    web_url: "",
  },
};

describe("reducer tests", () => {
  test(`reducer default value`, () => {
    expect(
      reducer(initialState, {
        //@ts-ignore
        type: "DEFAULT",
      })
    ).toBe(initialState);
  });

  test(`reducer reset store value`, () => {
    expect(
      reducer(initialState, {
        //@ts-ignore
        type: "RESET_STORE",
      })
    ).toStrictEqual(initialState);
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
      web_url: "",
    };
    expect(
      reducer(initialState, {
        type: "SET_ARTICLE_LIST",
        payload: [article],
      })
    ).toStrictEqual({
      ...initialState,
      articleList: [article],
    });
  });

  test(`reducer next page value`, () => {
    expect(
      reducer(initialState, {
        type: "SET_NEXT_PAGE",
      })
    ).toStrictEqual({
      ...initialState,
      page: 0,
      pageClicked: true,
    });
  });

  test(`reducer previous page value`, () => {
    expect(
      reducer(initialState, {
        type: "SET_PREV_PAGE",
      })
    ).toStrictEqual({
      ...initialState,
      page: 0,
      pageClicked: true,
    });
  });

  test(`reducer search click value`, () => {
    expect(
      reducer(initialState, {
        type: "SEARCH_CLICKED",
      })
    ).toStrictEqual({
      ...initialState,
      searchClicked: true,
    });
  });

  test(`reducer clear click value`, () => {
    expect(
      reducer(initialState, {
        type: "CLEAR_CLICKED",
      })
    ).toStrictEqual({
      ...initialState,
      clearClicked: true,
    });
  });

  test(`reducer reset search click value`, () => {
    const state = reducer(initialState, {
      type: "SEARCH_CLICKED",
    });
    expect(
      reducer(state, {
        type: "RESET_SEARCH_CLICKED",
      })
    ).toStrictEqual({
      ...initialState,
      searchClicked: false,
    });
  });

  test(`reducer clear search click value`, () => {
    const state = reducer(initialState, {
      type: "CLEAR_CLICKED",
    });
    expect(
      reducer(state, {
        type: "RESET_CLEAR_CLICKED",
      })
    ).toStrictEqual({
      ...initialState,
      clearClicked: false,
    });
  });

  test(`reducer reset pagination click value`, () => {
    const state = reducer(initialState, {
      type: "RESET_PAGINATION_CLICKED",
    });
    expect(
      reducer(state, {
        type: "RESET_PAGINATION_CLICKED",
      })
    ).toStrictEqual({
      ...initialState,
      pageClicked: false,
    });
  });
});
