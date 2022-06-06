import { useDispatch, useSelector } from "react-redux";
import { changeAmount } from "../../redux/actions/amountActions";
function AmountInput() {
  const dispatch = useDispatch();

  const amount = useSelector((state) => state.amountReducer);

  return (
    <div>
      AmountInput:{amount}
      <br />
      <input onChange={(e) => dispatch(changeAmount(e.target.value))} />
    </div>
  );
}

export default AmountInput;
