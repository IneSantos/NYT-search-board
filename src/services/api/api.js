import axios from "axios";
// eslint-disable-next-line no-undef
const apiKey = process.env.REACT_APP_YOUR_API_KEY;

export const getArticlesByPage = (page) => {
  return axios
    .get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?page=${page}&api-key=${apiKey}`
    )
    .then((response) => {
      return response.data.response.docs.reduce((acc, article) => {
        acc.push({
          id: article._id,
          abstract: article.abstract,
          headline: article.headline.main,
          keywords: article.keywords,
          section: article.section_name,
          snippet: article.snippet,
          pub_date: article.pub_date,
          source: article.source,
          web_url: article.web_url,
        });
        return acc;
      }, []);
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
      return [];
    });
};

export const getArticlesWithTitle = (title) => {
  return axios
    .get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=${title}&api-key=${apiKey}`
    )
    .then((response) => {
      return response.data.response.docs.reduce((acc, article) => {
        acc.push({
          abstract: article.abstract,
          headline: article.headline.main,
          keywords: article.keywords,
          section: article.section_name,
          snippet: article.snippet,
          pub_date: article.pub_date,
          source: article.source,
          web_url: article.web_url,
        });
        return acc;
      }, []);
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
      return [];
    });
};
