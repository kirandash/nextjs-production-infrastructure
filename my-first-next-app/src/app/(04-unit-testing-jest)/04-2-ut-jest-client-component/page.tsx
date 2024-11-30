'use client';

import React, { useState } from 'react';

const UnitTestingJest02 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className="p-4">
      <h1 data-testid="counter-title">Counter Component</h1>

      <div className="my-4">
        <p data-testid="count-display">Count: {count}</p>
        <button
          data-testid="increment-button"
          onClick={handleIncrement}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Increment
        </button>
      </div>

      <div className="my-4">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
          data-testid="name-input"
          className="border p-2 rounded"
        />
        {name && <p data-testid="greeting">Hello, {name}!</p>}
      </div>
    </div>
  );
};

export default UnitTestingJest02;
