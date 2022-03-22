import CounterModule from "./features/counter/CounterModule";
import CounterModuleV2 from "./features/counter/CounterModuleV2";
import { CounterModuleV3 } from "./features/counter/CounterModuleV3";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>类组件</p>
      <CounterModule></CounterModule>
      <p>类组件（进化版）</p>
      <CounterModuleV2></CounterModuleV2>
      <p>函数组件</p>
      <CounterModuleV3></CounterModuleV3>
    </div>
  );
}

export default App;
