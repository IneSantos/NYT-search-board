import React from "react";
import { render } from '@testing-library/react';
import SearchInput from "./search-input";

describe("SearchInput atom tests", () => {
  test(`SearchInput component render`, () => {
    const { container } = render(
      <SearchInput input={"This is an input"} handleSearch={jest.fn()}/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
