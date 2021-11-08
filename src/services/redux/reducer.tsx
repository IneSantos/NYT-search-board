import {
  ResetStore,
  SetArticleList,
  NextPage,
  PrevPage,
  SearchClicked,
  ResetSearchClicked,
  ResetPaginationClicked,
} from "./actions";
import { State } from "./configure-store";

type ArticleAction =
  | ResetStore
  | SetArticleList
  | NextPage
  | PrevPage
  | SearchClicked
  | ResetSearchClicked
  | ResetPaginationClicked;

const initialState = {
  articleList: [],
  page: -1,
  searchClicked: false,
  pageClicked: false,
};

export default function reducer(
  state: State = initialState,
  action: ArticleAction
): State {
  switch (action.type) {
    case "RESET_STORE": {
      return initialState;
    }
    case "SET_ARTICLE_LIST": {
      return {
        ...state,
        articleList: action.payload,
      };
    }
    case "SET_NEXT_PAGE": {
      return {
        ...state,
        page: state.page + 1,
        pageClicked: true,
      };
    }
    case "SET_PREV_PAGE": {
      const newPage = state.page - 1 > 0 ? state.page - 1 : 0;
      return {
        ...state,
        page: newPage,
        pageClicked: true,
      };
    }
    case "SEARCH_CLICKED": {
      return {
        ...state,
        searchClicked: true,
      };
    }
    case "RESET_SEARCH_CLICKED": {
      return {
        ...state,
        searchClicked: false,
      };
    }
    case "RESET_PAGINATION_CLICKED": {
      return {
        ...state,
        pageClicked: false,
      };
    }
    default: {
      return state;
    }
  }
}
