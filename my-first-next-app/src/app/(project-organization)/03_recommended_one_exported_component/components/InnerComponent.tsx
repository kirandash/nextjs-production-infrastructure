'use client';

import { useState } from 'react';

export function InnerComponent() {
  const [innerState, setInnerState] = useState(0);

  return (
    <div className="p-4 border-2 border-green-500 rounded">
      <h3 className="text-lg font-bold text-green-500">Inner Component</h3>
      <p>Inner State: {innerState}</p>
      <button
        className="px-4 py-2 mt-2 text-white bg-green-500 rounded"
        onClick={() => setInnerState(innerState + 1)}
      >
        Update Inner State
      </button>
    </div>
  );
}
