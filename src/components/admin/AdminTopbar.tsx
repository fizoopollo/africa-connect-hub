import { Link } from "react-router-dom";
import { Bell, CircleHelp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminTopbar() {
  return (
    <header className="h-14 bg-card border-b border-border flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">My Store</span>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Bell className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <CircleHelp className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-muted cursor-pointer transition-colors">
          <div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center">
            <span className="text-xs font-bold text-primary-foreground">A</span>
          </div>
          <ChevronDown className="h-3 w-3 text-muted-foreground" />
        </div>
      </div>
    </header>
  );
}
