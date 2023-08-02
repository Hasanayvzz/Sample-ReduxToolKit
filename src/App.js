import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  incrementCustom,
} from "./redux/features/counter/counterSlice";
import { useEffect } from "react";
import { getCountry } from "./redux/features/country/countrySlice";

function App() {
  const dispatch = useDispatch();
  console.log(useSelector((state) => state));
  const { counter } = useSelector((state) => state.counter);
  const { country, loading } = useSelector((state) => state.country);
  console.log(country);

  useEffect(() => {
    dispatch(getCountry());
  }, []);

  return (
    <div className="App">
      <span onClick={() => dispatch(decrement())}>-</span>
      <span>{counter}</span>
      <span onClick={() => dispatch(increment())}>+</span>
      <span onClick={() => dispatch(incrementCustom(2))}>custom</span>
    </div>
  );
}

export default App;
