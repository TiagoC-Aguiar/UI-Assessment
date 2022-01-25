import { render, screen } from "@testing-library/react";
import AccountOverview from "src/page/account-overview";
import { SalesCard } from "src/components";

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

test("render exact number of uploads", () => {
  const { getByText } = render(<AccountOverview data={accountOverviewStub} />);
  const uploads = getByText(/uploads/);
  expect(uploads).toBeInTheDocument();
  expect(uploads.innerHTML.charAt(0)).toEqual("8");
});

test("render exact number of successful uploads percentage", () => {
  const { getByText, container } = render(
    <SalesCard sales={accountOverviewStub.salesOverview} />
  );
  const uploads = getByText(/upload success/);
  const percentage = container.querySelector("div div span.percentage");
  expect(uploads).toBeInTheDocument();
  expect(percentage.innerHTML).toEqual("3%");
});

test("render exact number of linex savd", () => {
    const { getByText, container } = render(
      <SalesCard sales={accountOverviewStub.salesOverview} />
    );
    const uploads = getByText(/lines saved/);
    const percentage = container.querySelectorAll("div div span.percentage")[1];
    expect(uploads).toBeInTheDocument();
    expect(percentage.innerHTML).toEqual("4%");
  });
