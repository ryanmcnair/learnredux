import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, logged } from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <button onClick={() => dispatch(logged())}>Show Secret Info</button>
      {isLogged ? <h3>secret info!</h3> : ''}
      
    </div>
  );
}

export default App;
