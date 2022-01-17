import { useDispatch, useSelector } from 'react-redux';
import { decrement, increase, increment, toggleCounter } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  // @ts-ignore
  const { value, showCounter } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const increaseHandler = () => {
    dispatch(increase(5));
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      {showCounter && <div className={classes.value}>{value}</div>}

      <div>
        <button onClick={decrementHandler}>- Decrement</button>
        <button onClick={incrementHandler}>+ Increment</button>
        <button onClick={increaseHandler}>+ Increase by 5</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
