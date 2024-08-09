import BalanceDisplay from "./BalanceDisplay";
import Customer from "./CreateCustomer";
import CreateCustomer from "./CreateCustomer";
import AccountOperations from "./AccountOperations";

function App() {
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App;
