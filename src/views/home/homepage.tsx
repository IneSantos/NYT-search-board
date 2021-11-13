import { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import Loader from "../../components/atomic-ui/atoms/loader/loader";
import Homepage from "../../components/pages/home/homepage";
import {
  getArticlesByPage,
  getArticlesWithTitle,
} from "../../services/api/api";
import "normalize.css";
import "./homepage.css";
import { Article } from "../../components/pages/article-page/article-type";
import React from "react";

interface Props {
  articles: Article[];
  page: number;
  clearClicked: boolean;
  searchClicked: boolean;
  pageClicked: boolean;
}

const HomePageView = ({
  articles,
  page,
  clearClicked,
  searchClicked,
  pageClicked,
}: Props) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [pageShown, setPageShown] = useState(page);

  const handleSearch = (e) => {
    const userInput = e.target.value;
    setInput(userInput);
  };

  const resetStore = async () => {
    await dispatch({ type: "RESET_STORE" });
  };

  const getResultsList = () => {
    if (page === -1) {
      dispatch({ type: "SET_NEXT_PAGE" });
    }
    if (page !== -1) {
      getArticlesByPage(page)
        .then((data) => {
          setPageShown(page);
          dispatch({ type: "SET_ARTICLE_LIST", payload: data });
          dispatch({ type: "RESET_PAGINATION_CLICKED" });
        })
        .catch((err) => console.log(err));
    }
  };

  const getResultsByTitle = () => {
    getArticlesWithTitle(input)
      .then((data) => {
        dispatch({ type: "SET_ARTICLE_LIST", payload: data });
        dispatch({ type: "RESET_SEARCH_CLICKED" });
        setInput("");
        dispatch({ type: "RESET_CLEAR_CLICKED" });
        dispatch({ type: "RESET_PAGINATION_CLICKED" });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    articles.length == 0 && resetStore();
  }, []);

  useEffect(() => {
    if (pageShown === page && page !== -1 && !pageClicked) return;

    getResultsList();
  }, [page, pageShown, pageClicked]);

  useEffect(() => {
    if (!searchClicked) return;
    getResultsByTitle();
  }, [input, searchClicked]);

  useEffect(() => {
    if (!clearClicked) return;
    setInput("");
    dispatch({ type: "RESET_CLEAR_CLICKED" });
  }, [input, clearClicked]);

  return (
    <>
      {articles.length == 0 || pageClicked ? (
        <Loader />
      ) : (
        <Homepage
          handleSearch={handleSearch}
          searchInput={input}
          articles={articles}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.article.articleList,
    page: state.article.page,
    clearClicked: state.article.clearClicked,
    searchClicked: state.article.searchClicked,
    pageClicked: state.article.pageClicked,
  };
};

export default connect(mapStateToProps)(HomePageView);
