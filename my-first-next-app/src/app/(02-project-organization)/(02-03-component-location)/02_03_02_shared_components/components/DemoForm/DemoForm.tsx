import { Label } from '@/components/bgwebagency-design-system/ui/Label';
import { Badge } from '@/components/shadcn/ui/badge';
import { Button } from '@/components/shadcn/ui/button';

export function DemoForm() {
  return (
    <form className="space-y-6 border rounded-lg p-6 bg-slate-50">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Page-Specific Form Component</h3>
        <Badge variant="secondary">Page Specific</Badge>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label variant="required">Full Name</Label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-2">
          <Label variant="required">Email</Label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="john@example.com"
          />
        </div>

        <div className="space-y-2">
          <Label optional>Message</Label>
          <textarea
            className="w-full px-3 py-2 border rounded-md"
            rows={3}
            placeholder="Your message here..."
          />
        </div>

        <Button type="submit" className="w-full">
          Submit Form
        </Button>
      </div>
    </form>
  );
}
