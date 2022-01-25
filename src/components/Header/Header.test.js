import { render } from "@testing-library/react";

import Header from "./";

const accountOverviewStub = {
  supportContact: {
    name: "John Smith",
    email: "john.smith@feefo.com",
    phone: "619 732 855",
  },
  salesOverview: {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
  },
};

test("render header support contact", () => {
  const { getByText } = render(
    <Header contact={accountOverviewStub.supportContact} />
  );
  const headerField = getByText(/Accountant Overview/i);
  expect(headerField).toBeTruthy();
});

test("show support contact info", () => {
  const { getByText } = render(
    <Header
      contact={{ name: "Ana", email: "teste@email.com", phone: "991 221 342" }}
    />
  );
  const headerField = getByText(/YOUR FEEFO SUPPORT CONTACT/i);
  const name = getByText('Ana');
  const email = getByText('teste@email.com');
  const phone = getByText('991 221 342');
  expect(headerField).toBeInTheDocument();
  expect(name).toBeTruthy();
  expect(email).toBeInTheDocument();
  expect(phone).toBeInTheDocument();
});
