'use client';

import { useState } from 'react';

import { MiddleComponent } from './MiddleComponent';

export function OuterComponent() {
  const [outerState, setOuterState] = useState(0);

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
