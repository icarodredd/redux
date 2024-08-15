import { useSelector } from "react-redux";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const value = useSelector((store: any) => store.account.balance);
  return <div className="balance">{formatCurrency(value)}</div>;
}

export default BalanceDisplay;
