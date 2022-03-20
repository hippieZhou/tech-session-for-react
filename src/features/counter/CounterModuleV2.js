import React from "react";
import { connect, Provider } from "react-redux";
import Store from "../../store/Store";
import CounterReducer from "./CounterReducer";
import Counter from "../components/Counter";
import { getCounterValue } from "./CounterSelector";
import createCounterDispatcher from "./createCounterDispatcher";

//TODO: 简化类组件
class CounterModuleV2 extends React.Component {
  constructor(props) {
    super(props);
    const { counterValue } = { ...props };
    this.counterValue = counterValue;
    this.store = new Store(CounterReducer);
    this.state = this.state.getState();
    this.dispatch = createCounterDispatcher(this.store);
  }
  render() {
    return (
      <Provider store={this.store}>
        <Counter></Counter>
      </Provider>
    );
  }
}

const mapStateToProps = (state) => ({
  counterValue: getCounterValue(state),
});

const dispatchToProps = (dispatch) => ({
  increment: () => {
    dispatch.increment();
  },
  decrement: () => {
    dispatch.decrement();
  },
});

export default connect(mapStateToProps, dispatchToProps)(CounterModuleV2);
