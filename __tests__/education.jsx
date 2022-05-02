import React from "react";
import { render, screen } from "../test-utils";
import Education from '@pages/education/index'
import '@testing-library/jest-dom'

describe("EducationPage", () => {
    it("should render the heading", () => {
      render(<Education datafetch={{}}/>);
  
      const heading = screen.getByText(
        /Welcome to education page./i
      );
  
      expect(heading).toBeInTheDocument();
    });
  });