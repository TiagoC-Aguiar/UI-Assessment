import "./app.css";
import AccountOverview from "./page/account-overview";

function App() {
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

  return (
    <div className="App">
      <AccountOverview data={accountOverviewStub} />
    </div>
  );
}

export default App;
