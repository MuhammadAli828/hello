
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redusx/counterSlice.jsx'; // Corrected import path

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(increment())}>Increment</button>

    </div>
  );
}

export default Counter;
