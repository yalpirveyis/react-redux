import { useSelector } from "react-redux";

function CounterHeader() {
  const count = useSelector((state) => state.counterReducer);

  return <h1>{count}</h1>;
}

export default CounterHeader;
