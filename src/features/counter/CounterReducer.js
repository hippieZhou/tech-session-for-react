import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./CounterIntents";
import createReducer from "../../store/createReducer";

const getDefaultState = () => ({
  value: 100,
});

const increment = (state, { payload }) => ({
  ...state,
  value: state.value + payload,
});

const decrement = (state, { payload }) => ({
  ...state,
  value: state.value - payload,
});

const handlers = {
  [COUNTER_INCREMENT]: increment,
  [COUNTER_DECREMENT]: decrement,
};

const CounterReducer = createReducer(getDefaultState(), handlers);
export default CounterReducer;
