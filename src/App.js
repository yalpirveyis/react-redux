import AmountInput from "./components/AmountInput";
import CounterHeader from "./components/CounterHeader";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseCounter from "./components/IncreaseCounter";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <CounterHeader />
        <div>
          <AmountInput />
        </div>
        <div style={{ display: "flex" }}>
          <DecreaseCounter />
          <IncreaseCounter />
        </div>
      </div>
    </div>
  );
}

export default App;
