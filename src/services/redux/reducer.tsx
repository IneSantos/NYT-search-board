import { SetArticleList, NextPage, PrevPage, SearchClicked, ResetSearchClicked } from "./actions";
import { State } from "./configure-store";

type ArticleAction = 
| SetArticleList
| NextPage
| PrevPage
| SearchClicked
| ResetSearchClicked

const initialState =  {
    articleList: [],
    page: 0,
    searchClicked: false
  }

export default function reducer(
    state: State = initialState,
    action: ArticleAction
  ): State {
    switch (action.type) {
        case "SET_ARTICLE_LIST" : {
            return {
                ...state,
                articleList: action.payload
            };
        }
        case "SET_NEXT_PAGE" : {
            return {
                ...state,
                page: state.page + 1
            };
        }
        case "SET_PREV_PAGE" : {
          return {
              ...state,
              page: state.page - 1 > 0 ? state.page - 1 : state.page
          };
        }
        case "SEARCH_CLICKED" : {
          return {
              ...state,
              searchClicked: true 
          };
        }
        case "RESET_SEARCH_CLICKED" : {
          return {
              ...state,
              searchClicked: false 
          };
        }
        default: {
          return state;
        }
    }
  }