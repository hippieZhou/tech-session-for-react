import { Provider } from "react-redux";
import { useState, useEffect } from "react";
import Counter from "./components/Counter";
import Store from "../../store/Store";
import CounterReducer from "./CounterReducer";
import createCounterDispatcher from "./createCounterDispatcher";

// 需要独立于函数组件来定义，确保对象唯一
const store = new Store(CounterReducer);

// 函数组件
export const CounterModuleV3 = () => {
  const dispatcher = createCounterDispatcher(store);

  const [state, setState] = useState(store.getState());
  const updateState = () => setState(store.getState());

  useEffect(() => {
    store.subscribe(updateState);
    return () => store.unsubscribeAll();
  }, []);

  return (
    <Provider store={store}>
      <Counter
        value={state.value}
        increment={dispatcher.increment}
        decrement={dispatcher.decrement}
      ></Counter>
    </Provider>
  );
};
