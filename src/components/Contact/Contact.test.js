import { render } from "@testing-library/react";

import Contact from "./";
import AccountOverview from "src/page/account-overview";

const accountOverviewStub = {
  supportContact: {
    name: "Bernard",
    email: "john.smith@feefo.com",
    phone: "619 732 855",
  },
  salesOverview: {},
};

test("render name contact", () => {
  const { getByText } = render(
    <AccountOverview data={accountOverviewStub} />
  );
  const name = getByText("Bernard");
  expect(name).toBeTruthy();
});

test("render description header on contact infos", () => {
  const { getByText } = render(
    <Contact name={"Bernard"} email={"be@email.com"} phone={"619 732 856"} />
  );
  const text = getByText("Your Feefo support contact");
  expect(text).toHaveStyle("text-transform: uppercase");
});
