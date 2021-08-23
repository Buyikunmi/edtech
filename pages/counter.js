import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementValue, setIncrementValue] = useState(1);

  const reset = () => {
    setCount(0);
    setIncrementValue(1);
  };
  return (
    <div className="text-center text-white mt-20">
      <h2>Counter : {count}</h2>
      <input
        className="center w-24 my-2 "
        type="number"
        placeholder="change increment value here"
        onChange={(e) =>
          +e.target.value < 1
            ? setIncrementValue(1)
            : setIncrementValue(+e.target.value)
        }
      />
      <button
        onClick={() => setCount(count + +incrementValue)}
        className="bg-green-500 hover:bg-green-600 rounded-xl hover:shadow-xl mx-4 p-4"
      >
        Increase by {!incrementValue ? 1 : incrementValue}
      </button>
      <button
        onClick={() => setCount(count - +incrementValue)}
        className="bg-red-500  hover:bg-red-600  rounded-xl p-4"
      >
        Decrease by {!incrementValue ? 1 : incrementValue}
      </button>
      <br />
      <button
        className="bg-yellow-500 hover:bg-yellow-600 my-2 p-4 rounded-xl"
        onClick={() => reset()}
      >
        Reset
      </button>
    </div>
  );
}
