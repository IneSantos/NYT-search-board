import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { Article } from "../../components/pages/article-page/article-type";
import rootReducer from "./root-reducer";

export type State = {
  articleList: Article[];
  page: number;
  clearClicked: boolean;
  searchClicked: boolean;
  pageClicked: boolean;
  article: Article;
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
};
