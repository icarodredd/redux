import BalanceDisplay from "./features/accounts/BalanceDisplay";
import Customer from "./features/customers/Customer";
import CreateCustomer from "./features/customers/CreateCustomer";
import AccountOperations from "./features/accounts/AccountOperations";
import { useSelector } from "react-redux";

function App() {
  const data = useSelector((store: any) => store.customer);
  const { fullName } = data;
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          {" "}
          <Customer />
          <AccountOperations />
          <BalanceDisplay />{" "}
        </>
      )}
    </div>
  );
}

export default App;
