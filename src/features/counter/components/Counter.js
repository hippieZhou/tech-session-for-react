//定义核心组件
const Counter = (props) => {
  //函数参数解构
  const { value, increment, decrement } = { ...props };
  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => increment(10)}>Deposit</button>
      <button onClick={() => decrement(5)}>Withdrow</button>
    </div>
  );
};

export default Counter;
