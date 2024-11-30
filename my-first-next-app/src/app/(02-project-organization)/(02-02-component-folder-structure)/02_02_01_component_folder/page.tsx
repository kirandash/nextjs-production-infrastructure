'use client';

import { useState } from 'react';

import { Input } from './components/input';

export default function ComponentFolderStructurePage() {
  const [value, setValue] = useState('');

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Component Folder Structure Example
      </h1>
      <div className="max-w-md">
        <p className="mb-4">
          This is an example of a properly structured component folder. Check
          the input folder structure in the source code.
        </p>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type to test the input..."
        />
        <p className="mt-2">Current value: {value}</p>
      </div>
    </div>
  );
}
