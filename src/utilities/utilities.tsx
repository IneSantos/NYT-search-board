export const formatDate = (date: string) => {
  const d = new Date(date);

  return [d.getDate(), d.getMonth() + 1, d.getFullYear()].join(".");
};

export const getArticleURL = (url: string, index: number) => {
  const articleId = url && url.split("nyt://article/")[1];
  return articleId ? articleId : index;
};
