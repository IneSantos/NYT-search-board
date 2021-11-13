import { formatDate, getArticleURL } from "./utilities";

describe("utilities tests", () => {
  test(`formatDate`, () => {
    expect(formatDate("December 17, 1995 03:24:00")).toEqual("17.12.1995");
  });

  test(`formatDate`, () => {
    expect(
      getArticleURL("nyt://article/1e771e2f-c0c4-56fd-96cd-9412fb8c9ae9", 0)
    ).toEqual("1e771e2f-c0c4-56fd-96cd-9412fb8c9ae9");
  });
});
