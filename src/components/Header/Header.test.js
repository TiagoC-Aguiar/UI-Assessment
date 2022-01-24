import { render, screen } from "@testing-library/react";

import Header from "./";

test("render header support contact", () => {
  const { getByText } = render(<Header />);
  const headerField = getByText(/Your Feefo Support Contact/i);
  expect(headerField).toBeTruthy();
});

test("show support contact be uppercase", () => {
  const { getByText } = render(<Header />);
  const headerField = getByText(/YOUR FEEFO SUPPORT CONTACT/);
  expect(headerField).toBeInTheDocument();
});
