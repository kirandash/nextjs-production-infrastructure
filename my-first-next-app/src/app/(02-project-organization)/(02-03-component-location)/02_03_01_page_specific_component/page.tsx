import { ContactForm } from './components/ContactForm';

export default function PageSpecificComponentDemo() {
  return (
    <div className="container">
      <h1>Page-Specific Component Example</h1>
      <p>
        This page demonstrates a component (ContactForm) that is specific to
        this route. Since the ContactForm component is only used here, its
        located in the same directory as the page component.
      </p>
      <p>Benefits of this approach:</p>
      <ul>
        <li>Better code organization</li>
        <li>Clearer component ownership</li>
        <li>Easier to find and maintain related code</li>
        <li>
          Prevents unnecessary sharing of components that should be
          page-specific
        </li>
      </ul>
      <ContactForm />
    </div>
  );
}
