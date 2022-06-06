import { useDispatch } from "react-redux";
import { increaseCounter } from "../../redux/actions/counterActions";
function IncreaseCounter() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increaseCounter())}
      >
        Increment
      </button>
    </div>
  );
}

export default IncreaseCounter;
