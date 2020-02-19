import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import 'mutationobserver-shim';

test("renders App without crashing", () => {
  ///arrange
  const {getByText}= render(<App />);

  //act
  const fName= getByText(/first name*/i);
  const message= getByText(/message/i);

  //assert
  expect(fName).toBeInTheDocument();
  expect(message).toBeInTheDocument();
});




