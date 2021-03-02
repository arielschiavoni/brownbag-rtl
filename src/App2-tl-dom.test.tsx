import React from "react";
import { getQueriesForElement } from "@testing-library/dom";
import { App } from "./App";
import { render } from "react-dom";

/**
 * test using @testing-library/dom
 * use of getByLabelText (helpful to detect a11y issues)
 * https://testing-playground.com/
 *
 */
test("renders App", () => {
  const root = document.createElement("div");
  render(<App />, root);

  const { getByText } = getQueriesForElement(root);

  expect(getByText("My TODOs")).not.toBeNull();
  expect(getByText("What's the next thing you have to do?")).not.toBeNull();
  expect(getByText("Add todo")).not.toBeNull();

  // const { getByText, getByLabelText } = getQueriesForElement(root);

  // expect(getByText("My TODOs")).not.toBeNull();
  // expect(
  //   getByLabelText("What's the next thing you have to do?")
  // ).not.toBeNull();
  // expect(getByText("Add todo")).not.toBeNull();
});
