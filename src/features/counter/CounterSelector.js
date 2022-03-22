import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./CounterIntents";

export const getCounterValue = (state) => state.value;

export const doIncrement = (dispatch, payload) =>
  dispatch({ intent: COUNTER_INCREMENT, payload });

export const doDecrement = (dispatch, payload) =>
  dispatch({ intent: COUNTER_DECREMENT, payload });
