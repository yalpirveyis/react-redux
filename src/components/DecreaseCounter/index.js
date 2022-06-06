import { useDispatch } from "react-redux";
import { decreaseCounter } from "../../redux/actions/counterActions";
function DecreaseCounter() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        aria-label="Decrease value"
        onClick={() => dispatch(decreaseCounter())}
      >
        Decrease
      </button>
    </div>
  );
}

export default DecreaseCounter;
