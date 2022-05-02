import React from "react";
import { render, screen } from "../test-utils";
import Home from "@pages/index";
import "@testing-library/jest-dom";

describe("HomePage", () => {
  it("should render the heading", () => {
    render(<Home />);

    const heading = screen.getByText(
      /Hi There! Welcome to your education showcase/i
    );

    expect(heading).toBeInTheDocument();
  });
});
