import { Provider } from "react-redux";
import { useState, useEffect } from "react";
import Counter from "../components/Counter";
import Store from "../../store/Store";
import CounterReducer from "./CounterReducer";
import createCounterDispatcher from "./createCounterDispatcher";

// 函数组件
export const CounterModuleV3 = () => {
  const store = new Store(CounterReducer);
  const dispatcher = createCounterDispatcher(store);
  const [counter, setCounter] = useState(store.getState().value);

  const updateState = () => {
    const state = store.getState();
    console.log(counter, state);
    // TODO:doesn't work
    // setCounter(state.value);
  };

  useEffect(() => {
    store.subscribe(updateState);
    return () => store.unsubscribeAll();
  });

  return (
    <Provider store={store}>
      <Counter
        value={counter}
        increment={dispatcher.increment}
        decrement={dispatcher.decrement}
      ></Counter>
    </Provider>
  );
};
