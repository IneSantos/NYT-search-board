import React from "react";
import { render } from '@testing-library/react';
import PageHeader from "./page-header";

describe("PageHeader atom tests", () => {
  test(`PageHeader component render`, () => {
    const { container } = render(
      <PageHeader/>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
