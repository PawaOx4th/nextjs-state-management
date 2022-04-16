import React, { memo, useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  const handleIncreamentCounter = () => {
    setCounter((latestValue) => latestValue + 1);
  };

  return (
    <div>
      Counter : {counter}{' '}
      <button
        className="rounded bg-gray-300 px-2 shadow-md"
        onClick={() => handleIncreamentCounter()}
      >
        &#x2b;
      </button>{' '}
    </div>
  );
}

export default memo(Counter);
