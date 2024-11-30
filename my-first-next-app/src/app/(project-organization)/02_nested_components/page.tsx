'use client';

import { useState } from 'react';

// 🚨 Avoid this pattern of nested components!

export default function NestedComponentsDemo() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [count, setCount] = useState(0);

  // This is an example of a nested component - avoid this pattern!
  function OuterComponent() {
    const [outerState, setOuterState] = useState(0);

    // Another nested component - this is even worse!
    function MiddleComponent() {
      const [middleState, setMiddleState] = useState(0);

      // Deeply nested component - this creates many issues!
      function InnerComponent() {
        const [innerState, setInnerState] = useState(0);

        return (
          <div className="p-4 border-2 border-red-500 rounded">
            <h3 className="text-lg font-bold text-red-500">Inner Component</h3>
            <p>Inner State: {innerState}</p>
            <button
              className="px-4 py-2 mt-2 text-white bg-red-500 rounded"
              onClick={() => setInnerState(innerState + 1)}
            >
              Update Inner State
            </button>
          </div>
        );
      }

      return (
        <div className="p-4 border-2 border-yellow-500 rounded">
          <h2 className="text-xl font-bold text-yellow-500">
            Middle Component
          </h2>
          <p>Middle State: {middleState}</p>
          <button
            className="px-4 py-2 mt-2 text-white bg-yellow-500 rounded"
            onClick={() => setMiddleState(middleState + 1)}
          >
            Update Middle State
          </button>
          <div className="mt-4">
            <InnerComponent />
          </div>
        </div>
      );
    }

    return (
      <div className="p-4 border-2 border-blue-500 rounded">
        <h1 className="text-2xl font-bold text-blue-500">Outer Component</h1>
        <p>Outer State: {outerState}</p>
        <button
          className="px-4 py-2 mt-2 text-white bg-blue-500 rounded"
          onClick={() => setOuterState(outerState + 1)}
        >
          Update Outer State
        </button>
        <div className="mt-4">
          <MiddleComponent />
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Nested Components Anti-Pattern Demo
        </h1>
        <p className="mt-2 text-red-600">
          ⚠️ This is an example of how NOT to structure your components!
        </p>
        <ul className="mt-4 list-disc list-inside">
          <li>Makes code harder to maintain and test</li>
          <li>Creates unnecessary re-renders</li>
          <li>Reduces component reusability</li>
          <li>Makes debugging more difficult</li>
          <li>Can lead to memory leaks with hooks</li>
        </ul>
      </div>
      <OuterComponent />
    </div>
  );
}
