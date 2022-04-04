import React from "react";
import { Provider } from "react-redux";
import Store from "../../store/Store";
import CounterReducer from "./CounterReducer";
import createCounterDispatcher from "./createCounterDispatcher";
import Counter from "./components/Counter";

class CounterModule extends React.Component {
  constructor(props) {
    super(props);
    this.store = new Store(CounterReducer);
    this.dispatcher = createCounterDispatcher(this.store);
    this.store.subscribe(() => {
      this.setState(this.store.getState());
      return () => this.store.unsubscribeAll();
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
