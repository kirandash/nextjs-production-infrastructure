import { Label } from '@/components/bgwebagency-design-system/ui/label';
import { Badge } from '@/components/shadcn/ui/badge';
import { Button } from '@/components/shadcn/ui/button';

import { DemoForm } from './components/DemoForm/DemoForm';

export default function SharedComponentsDemo() {
  return (
    <div className="p-6 max-w-2xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Components Demo</h1>
        <p className="text-muted-foreground">
          This page demonstrates the usage of both shared UI components and
          page-specific components.
        </p>
      </div>

      {/* Page Specific Component Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">Page-Specific Component</h2>
          <Badge>Using Shared Components</Badge>
        </div>
        <DemoForm />
      </section>

      <div className="border-t my-8" />

      {/* Shared Components Showcase */}
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Shared Components Library</h2>
        <p className="text-muted-foreground">
          Individual examples of our shared components
        </p>
      </div>

      {/* Labels Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Labels</h2>
        <div className="grid gap-4">
          <Label>Default Label</Label>
          <Label variant="error">Error Label</Label>
          <Label variant="success">Success Label</Label>
          <Label variant="required">Required Field</Label>
          <Label optional>Optional Field</Label>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      {/* Badges Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Badges</h2>
        <div className="flex flex-wrap gap-4">
          <Badge>Default Badge</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>
    </div>
  );
}
