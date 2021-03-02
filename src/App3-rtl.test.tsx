import React from "react";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
// https://testing-library.com/docs/ecosystem-user-event/
import { App } from "./App";
import * as api from "./api";

/**
 * test using @testing-library/react
 * custom assertions with -> @testing-library/jest-dom (see setupTests.ts)
 */
test("renders App", () => {
  render(<App />);

  expect(screen.getByText("My TODOs")).toBeInTheDocument();
  expect(
    screen.getByLabelText("What's the next thing you have to do?")
  ).toBeInTheDocument();
  expect(screen.getByText("Add todo")).toBeInTheDocument();
});

test("renders learn react-testing-library link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learning react testing library/i);
  expect(linkElement).toBeInTheDocument();
});

/**
 * demo fireEvent
 */
test("add todo", () => {
  render(<App />);

  // we get the by its related label text in a similar way a user identifies it!
  const input = screen.getByLabelText("What's the next thing you have to do?");

  fireEvent.change(input, { target: { value: "my first todo" } });
  fireEvent.click(screen.getByRole("button", { name: /add todo/i }));

  expect(screen.getByText("my first todo")).toBeInTheDocument();
});

/**
 * demo @testing-library/user-event
 */
test("add todo (userEvent)", async () => {
  render(<App />);

  // we get the by its related label text in a similar way a user identifies it!
  const input = screen.getByLabelText("What's the next thing you have to do?");

  await user.type(input, "my first todo", { delay: 10 });

  user.click(screen.getByRole("button", { name: /add todo/i }));

  expect(screen.getByText("my first todo")).toBeInTheDocument();
});

/**
 * demo api + mocking
 */

jest.mock("./api");
const mockedApi = api as jest.Mocked<typeof api>;

test.skip("create todo api", async () => {
  const todoText = "todo text from mocked api response";
  mockedApi.createTodo.mockResolvedValueOnce({
    id: 123,
    text: todoText,
  });

  render(<App />);

  // we get the by its related label text in a similar way a user identifies it!
  const input = screen.getByLabelText("What's the next thing you have to do?");

  await user.type(input, todoText, { delay: 10 });

  user.click(screen.getByRole("button", { name: /add todo/i }));

  expect(mockedApi.createTodo).toHaveBeenCalledTimes(1);
  expect(mockedApi.createTodo).toHaveBeenCalledWith(
    expect.objectContaining({ text: todoText })
  );

  const todoElement = await screen.findByText(todoText);
  expect(todoElement).toBeInTheDocument();

  // findByText is the async version of getByText (shorthand for waitFor + getByText)
  // const todoElement = await waitFor(() => screen.getByText(todoText));
  // expect(todoElement).toBeInTheDocument();
});
