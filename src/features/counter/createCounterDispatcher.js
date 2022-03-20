import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./CounterIntents";

const createCounterDispatcher = (store) => ({
  increment: (payload) => {
    const intent = COUNTER_INCREMENT;
    store.dispatch({ intent, payload });
  },
  decrement: (payload) => {
    const intent = COUNTER_DECREMENT;
    store.dispatch({ intent, payload });
  },
});

export default createCounterDispatcher;
