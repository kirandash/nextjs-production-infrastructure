'use client';

import { useState } from 'react';

import { InnerComponent } from './InnerComponent';

export function MiddleComponent() {
  const [middleState, setMiddleState] = useState(0);

  return (
    <div className="p-4 border-2 border-purple-500 rounded">
      <h2 className="text-xl font-bold text-purple-500">Middle Component</h2>
      <p>Middle State: {middleState}</p>
      <button
        className="px-4 py-2 mt-2 text-white bg-purple-500 rounded"
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
