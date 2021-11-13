import { Article } from "../../components/pages/article-page/article-type";

export type ResetStore = {
  type: "RESET_STORE";
};

export type SetArticleList = {
  type: "SET_ARTICLE_LIST";
  payload: Article[];
};

export type SetArticle = {
  type: "SET_ARTICLE";
  payload: Article;
};

export type NextPage = {
  type: "SET_NEXT_PAGE";
};

export type PrevPage = {
  type: "SET_PREV_PAGE";
};

export type SearchClicked = {
  type: "SEARCH_CLICKED";
};

export type ResetSearchClicked = {
  type: "RESET_SEARCH_CLICKED";
};

export type ClearClicked = {
  type: "CLEAR_CLICKED";
};

export type ResetClearClicked = {
  type: "RESET_CLEAR_CLICKED";
};

export type ResetPaginationClicked = {
  type: "RESET_PAGINATION_CLICKED";
};
