import React from "react";
import renderer from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "../components/Calculator";

describe("App", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Calculator />);

    expect(tree).toMatchSnapshot();
  });

  it("Display 10.5", () => {
    const { getByText } = render(<Calculator />);

    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("6"));
    fireEvent.click(getByText("."));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("÷"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("="));

    expect(getByText("8.1")).toBeInTheDocument();
  });
});
