import { Label } from '@/components/bgwebagency/ui/label';
import { Badge } from '@/components/shadcn/ui/badge';
import { Button } from '@/components/shadcn/ui/button';

export default function SharedComponentsDemo() {
  return (
    <div className="p-6 max-w-2xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Shared Components Demo</h1>
        <p className="text-muted-foreground">
          This page demonstrates the usage of shared UI components from our
          component library.
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

      {/* Combined Usage Example */}
      <section className="space-y-4 border rounded-lg p-4">
        <h2 className="text-xl font-semibold">Combined Usage Example</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label variant="required">Username</Label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter username"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button type="submit">Submit</Button>
            <Badge variant="secondary">Required</Badge>
          </div>
        </div>
      </section>
    </div>
  );
}
