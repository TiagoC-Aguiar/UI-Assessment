import { render, screen } from "@testing-library/react";

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

// test("show support contact be uppercase", () => {
//   const { getByText } = render(
//     <Header
//       contact={{ name: "test", email: "teste@email.com", phone: "991 221 342" }}
//     />
//   );
//   const headerField = getByText(/YOUR FEEFO SUPPORT CONTACT/);
//   expect(headerField).toBeInTheDocument();
// });
