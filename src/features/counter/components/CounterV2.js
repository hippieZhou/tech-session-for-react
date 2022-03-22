import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "../CounterIntents";
import { getCounterValue } from "../CounterSelector";
import { connect } from "react-redux";
//定义核心组件
const CounterV2 = (props) => {
  return (
    <div>
      Value: {props.counterValue}
      <button onClick={props.increment.bind(this, 10)}>Deposit</button>
      <button onClick={props.decrement.bind(this, 5)}>Withdrow</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counterValue: getCounterValue(state),
});

const dispatchToProps = (dispatch) => ({
  increment: (payload) => dispatch({ intent: COUNTER_INCREMENT, payload }),
  decrement: (payload) => dispatch({ intent: COUNTER_DECREMENT, payload }),
});

export default connect(mapStateToProps, dispatchToProps)(CounterV2);