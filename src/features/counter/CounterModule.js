import React from "react";
import { Provider } from "react-redux";
import Store from "../../store/Store";
import CounterReducer from "./CounterReducer";
import createCounterDispatcher from "./createCounterDispatcher";
import Counter from "../components/Counter";

// 类组件
class CounterModule extends React.Component {
  constructor(props) {
    super(props);
    this.store = new Store(CounterReducer);
    this.dispatcher = createCounterDispatcher(this.store);
    this.unsubscribeFromStore = () => {
      this.store.unsubscribeAll();
    };
    this.store.subscribe(() => {
      // console.log(this.store.getState());
      this.setState(this.store.getState());
    });
  }

  render() {
    return (
      <Provider store={this.store}>
        <Counter
          value={this.store.getState().value}
          increment={this.dispatcher.increment}
          decrement={this.dispatcher.decrement}
        ></Counter>
      </Provider>
    );
  }
}

export default CounterModule;
