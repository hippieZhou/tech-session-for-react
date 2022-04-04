import React from "react";
import { Provider } from "react-redux";
import Store from "../../store/Store";
import CounterReducer from "./CounterReducer";
import CounterV2 from "./components/CounterV2";

class CounterModuleV2 extends React.Component {
  constructor(props) {
    super(props);
    this.store = new Store(CounterReducer);
  }
  render() {
    return (
      <Provider store={this.store}>
        <CounterV2 />
      </Provider>
    );
  }
}

export default CounterModuleV2;
