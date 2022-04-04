import { getCounterValue, doIncrement, doDecrement } from "../CounterSelector";
import { connect } from "react-redux";

//定义核心组件
const CounterV2 = (props) => {
  return (
    <div>
      <p>Value: {props.counterValue}</p>
      <button onClick={() => props.increment(10)}>Deposit</button>
      <button onClick={() => props.decrement(5)}>Withdrow</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counterValue: getCounterValue(state),
});

const dispatchToProps = (dispatch) => ({
  increment: (payload) => doIncrement(dispatch, payload),
  decrement: (payload) => doDecrement(dispatch, payload),
});

export default connect(mapStateToProps, dispatchToProps)(CounterV2);
