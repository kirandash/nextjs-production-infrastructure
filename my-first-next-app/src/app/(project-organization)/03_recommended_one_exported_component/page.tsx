import { OuterComponent } from './components/OuterComponent';

export default function RecommendedComponentStructure() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Recommended Component Structure Demo
        </h1>
        <p className="mt-2 text-green-600">
          ✅ This is the recommended way to structure your components!
        </p>
        <ul className="mt-4 list-disc list-inside">
          <li>Each component is in its own file</li>
          <li>Only one exported component per file</li>
          <li>Clear import/export structure</li>
          <li>Better maintainability and testing</li>
          <li>Improved reusability</li>
          <li>Easier debugging</li>
        </ul>
      </div>
      <OuterComponent />
    </div>
  );
}
