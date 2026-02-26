import { Link } from "react-router-dom";
import { Eye, MoreHorizontal, Upload, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { artTemplates } from "@/data/artTemplates";
import { beautyTemplates } from "@/data/beautyTemplates";

const serviceTemplates = [
  { name: "Noteable", slug: "noteable", price: "Free" },
  { name: "Tattoo Studio", slug: "tattoo", price: "Free" },
  { name: "Genius", slug: "genius", price: "Free" },
];

const autoTemplates = [
  { name: "Maranello", slug: "maranello", price: "Free" },
];

const bagsTemplates = [
  { name: "Courier", slug: "courier", price: "Free" },
];

const currentTheme = {
  name: "Dawn",
  role: "Live theme",
  version: "15.0",
  lastSaved: "2 hours ago",
};

type ThemeCard = { name: string; image: string; price: string; href: string; rating?: string };

function buildThemeList(): ThemeCard[] {
  const all: ThemeCard[] = [
    ...artTemplates.slice(0, 4).map((t) => ({
      name: t.name, image: t.image, price: t.price, rating: t.rating, href: `/afrify/templates/art/${t.slug}`,
    })),
    ...beautyTemplates.slice(0, 3).map((t) => ({
      name: t.name, image: t.image, price: t.price, rating: t.rating, href: `/afrify/templates/beauty/${t.slug}`,
    })),
    ...serviceTemplates.map((t) => ({
      name: t.name, image: "", price: t.price, href: `/afrify/templates/services/${t.slug}`,
    })),
  ];
  return all.slice(0, 10);
}

export default function AdminOnlineStoreThemes() {
  const themes = buildThemeList();

  return (
    <div className="max-w-5xl mx-auto">
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
          <div className="md:w-80 bg-muted aspect-[4/3] md:aspect-auto flex items-center justify-center border-b md:border-b-0 md:border-r border-border overflow-hidden">
            {artTemplates[0] && (
              <img src={artTemplates[0].image} alt={artTemplates[0].name} className="w-full h-full object-cover" />
            )}
          </div>
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

      {/* Theme library – horizontal scroll */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Theme library <span className="text-sm font-normal text-muted-foreground">({themes.length} themes)</span></h2>
          <Link to="/afrify/templates-store">
            <Button variant="outline" size="sm"><Plus className="h-4 w-4 mr-1" /> Explore more</Button>
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {themes.map((theme) => (
            <Link
              key={theme.name}
              to={theme.href}
              className="bg-card rounded-xl border border-border overflow-hidden group hover:shadow-md transition-shadow flex-shrink-0 w-48"
            >
              <div className="aspect-[4/3] bg-muted flex items-center justify-center overflow-hidden">
                {theme.image ? (
                  <img src={theme.image} alt={theme.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                ) : (
                  <span className="text-2xl font-bold text-muted-foreground/30">{theme.name[0]}</span>
                )}
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between mb-0.5">
                  <h3 className="font-semibold text-sm truncate">{theme.name}</h3>
                  <span className="text-xs text-muted-foreground">{theme.price}</span>
                </div>
                {theme.rating && (
                  <span className="text-xs text-muted-foreground">{theme.rating} rating</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
