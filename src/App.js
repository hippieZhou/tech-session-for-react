import CounterModule from "./features/counter/CounterModule";
import CounterModuleV2 from "./features/counter/CounterModuleV2";
import { CounterModuleV3 } from "./features/counter/CounterModuleV3";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>类组件</h1>
      <CounterModule></CounterModule>
      <h1>类组件（进化版）</h1>
      <CounterModuleV2></CounterModuleV2>
      <h1>函数组件</h1>
      <CounterModuleV3></CounterModuleV3>
    </div>
  );
}

export default App;
