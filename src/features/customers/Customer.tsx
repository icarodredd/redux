import { useSelector } from "react-redux";
function Customer() {
  const data = useSelector((store: any) => store.customer);

  console.log(data);

  return <h2>👋 Welcome, %NAME%</h2>;
}

export default Customer;
