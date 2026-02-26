import { Link } from "react-router-dom";
import { Palette, Eye, MoreHorizontal, Upload, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const currentTheme = {
  name: "Dawn",
  role: "Live theme",
  version: "15.0",
  lastSaved: "2 hours ago",
};

const themeLibrary = [
  { name: "Craft", style: "Minimal & clean", price: "Free" },
  { name: "Refresh", style: "Bold & modern", price: "Free" },
  { name: "Sense", style: "Warm & natural", price: "Free" },
  { name: "Ride", style: "Dynamic & sporty", price: "$350" },
  { name: "Prestige", style: "Elegant & premium", price: "$350" },
  { name: "Impact", style: "High-converting", price: "$350" },
];

export default function AdminOnlineStoreThemes() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Themes</h1>
          <p className="text-sm text-muted-foreground">Manage and customize your online store's theme.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm"><Upload className="h-4 w-4 mr-1" /> Upload theme</Button>
          <Link to="/afrify/templates-store">
            <Button variant="default" size="sm"><Plus className="h-4 w-4 mr-1" /> Add theme</Button>
          </Link>
        </div>
      </div>

      {/* Current theme */}
      <div className="bg-card rounded-xl border border-border overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-border">
          <h2 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Current theme</h2>
        </div>
        <div className="flex flex-col md:flex-row">
          {/* Preview */}
          <div className="md:w-80 bg-muted aspect-[4/3] md:aspect-auto flex items-center justify-center border-b md:border-b-0 md:border-r border-border">
            <div className="text-center">
              <Palette className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Theme preview</p>
            </div>
          </div>
          {/* Details */}
          <div className="flex-1 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold">{currentTheme.name}</h3>
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {currentTheme.role}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Version {currentTheme.version} · Last saved {currentTheme.lastSaved}</p>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="default" size="sm">Customize</Button>
              <Button variant="outline" size="sm"><Eye className="h-4 w-4 mr-1" /> Preview</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Theme library */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Theme library</h2>
          <Link to="/afrify/templates-store" className="text-sm text-primary font-medium hover:underline">
            Visit Theme Store →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {themeLibrary.map((theme) => (
            <div key={theme.name} className="bg-card rounded-xl border border-border overflow-hidden group hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                <Palette className="h-8 w-8 text-muted-foreground" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-sm">{theme.name}</h3>
                  <span className="text-xs text-muted-foreground">{theme.price}</span>
                </div>
                <p className="text-xs text-muted-foreground">{theme.style}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
