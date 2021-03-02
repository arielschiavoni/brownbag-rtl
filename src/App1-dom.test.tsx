import React from "react";
import { render } from "react-dom";
import { App } from "./App";

/**
 * test using react-dom & DOM (no library)
 */
test("renders App", () => {
  const root = document.createElement("div");
  render(<App />, root);

  expect(root.querySelector("h1")?.textContent).toBe("My TODOs");
  expect(root.querySelector("label")?.textContent).toBe(
    "What's the next thing you have to do?"
  );
  expect(root.querySelector("button")?.textContent).toBe("Add todo");

  /**
   * This works but it can be improved!
   * DOM apis are used to get HTML elements. RTL offers utility functions that are better suited for this
   * job. These functions are called `queries` and they allow to interact with DOM nodes in a way that's similar
   * to how the user finds elements on the page (see example with input/label and htmlFor)
   */
});
