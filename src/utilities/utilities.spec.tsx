import {formatDate} from "./utilities";

describe("utilities tests", () => {
  test(`formatDate`, () => {
    expect(formatDate("December 17, 1995 03:24:00")).toEqual("17.12.1995");
  });
});
