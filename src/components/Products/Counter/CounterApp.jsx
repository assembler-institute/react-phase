import { useEffect, useState } from "react";
import "./counterstyles.css";

const CounterApp = ({ initialValue = 0 }) => {
  // const [ firstName, setFirstname ] = useState('');
  // const [ surName, setSurname ] = useState('');
  // const [ age, setage ] = useState(number);

  const [counter, setCounter] = useState(initialValue);

  // const [user, setUser] = useState({
  //   name: "Jose",
  //   surName: "Valenzuela",
  //   age: 0,
  // });

  // const { name, surName, age } = user;
  // console.log(name, surName);

  const increaseValue = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
  };

  const substractValue = () => {
    if (counter === 0) return initialValue;
    // setCounter(counter - 1);
    setCounter((prevState) => prevState - 1);
  };

  const resetValue = () => {
    setCounter((initialValue = 0));
  };

  return (
    <>
      <div>{counter}</div>
      <button className="btn-counter btn-counter__add" onClick={increaseValue}>
        +
      </button>
      <button className="btn-counter btn-counter__reset" onClick={resetValue}>
        C
      </button>
      <button
        className="btn-counter btn-counter__substract"
        onClick={substractValue}
      >
        -
      </button>
      {/* <button disabled={counter <= 0} onClick={substractValue}>
        -
      </button> */}
    </>
  );
};

export default CounterApp;
