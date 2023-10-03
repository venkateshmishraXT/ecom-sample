"use client"
import React, { useState } from 'react';

const Counter = ({sendProductCount}:any) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
    sendProductCount(count+1)
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      sendProductCount(count-1)
    }
  };

  return (
    <div className="flex items-center justify-start mt-4">
      <button
        className="text-black border-black-600 font-bold py-2 px-4 rounded border"
        onClick={decrement}
        disabled={count==1}
      >
        -
      </button>
      <input
        type="text"
        className="border border-gray-400 p-2 w-32 text-center"
        value={count}
        readOnly
      />
      <button
        className="text-black border-black-600 font-bold py-2 px-4 rounded border"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
