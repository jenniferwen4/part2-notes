import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Note from "./Note";

test("renders content", () => {
  const note = {
    content: "Component testing is done with react-testing-library",
    important: true,
  };

  render(<Note note={note} />);

  /* screen gives access to the renered component */
  /* getByText makes sure that the note content exists */
  const element = screen.getByText(
    "Component testing is done with react-testing-library"
  );

  //screen.debug(element);

  expect(element).toBeDefined();
});

test("clicking the button calls event handler once", async () => {
  const note = {
    content: "Component testing is done with react-testing-library",
    important: true,
  };

  const mockHandler = jest.fn(); //mock function defined by jest

  render(<Note note={note} toggleImportance={mockHandler}></Note>);

  const button = screen.getByText("make not important");
  userEvent.click(button);

  /* The test verifies that the mock function has been called once */
  expect(mockHandler.mock.calls).toHaveLength(1);
});
