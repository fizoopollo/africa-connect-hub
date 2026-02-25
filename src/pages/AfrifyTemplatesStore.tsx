import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronUp, X, LayoutGrid, ArrowLeft, ThumbsUp } from "lucide-react";
import geniusHero from "@/assets/genius-hero.jpg";
import noteableHero from "@/assets/noteable-hero.jpg";
import workflowHero from "@/assets/workflow-hero.jpg";
import grainHero from "@/assets/grain-hero.jpg";
import smileHero from "@/assets/smile-hero.jpg";
import panoramaHero from "@/assets/panorama-hero.jpg";
import printingHero from "@/assets/printing-hero.jpg";
import sonikHero from "@/assets/sonik-hero.jpg";
import leapHero from "@/assets/leap-hero.jpg";
import airconHero from "@/assets/aircon-hero.jpg";
import enthusiastHero from "@/assets/enthusiast-hero.jpg";
import tattooHero from "@/assets/tattoo-hero.jpg";
import canvasHero from "@/assets/canvas-hero.jpg";
import paletteHero from "@/assets/palette-hero.jpg";
import sculptHero from "@/assets/sculpt-hero.jpg";
import shutterHero from "@/assets/shutter-hero.jpg";
import pixelHero from "@/assets/pixel-hero.jpg";
import artisanHero from "@/assets/artisan-hero.jpg";

// Filter data
const priceOptions = [
  { label: "Free", count: 6 },
  { label: "Paid", count: 12 },
];

const industryOptions = [
  "Art",
  "Auto",
  "Bags",
  "Beauty",
  "Clothing",
  "Electronics",
  "Entertainment",
  "Food and drink",
  "Garden",
  "Hardware",
  "Home",
  "Jewelry and accessories",
  "Kids",
  "Office",
  "Pets",
  "Services",
  "Shoes",
  "Sports",
  "Toys",
  "Wellness",
];

const catalogSizeOptions = [
  { label: "One Product", count: 0 },
  { label: "Few (2-10)", count: 4 },
  { label: "Some (11-100+)", count: 8 },
  { label: "Lots (500+)", count: 0 },
];

const featureOptions = [
  { label: "Age verifier", count: 8 },
  { label: "Back-to-top button", count: 8 },
  { label: "Before/after image slider", count: 8 },
  { label: "Breadcrumbs", count: 10 },
  { label: "Color swatches", count: 11 },
  { label: "Combined listing", count: 3 },
  { label: "Countdown timer", count: 11 },
  { label: "EU translations", count: 10 },
  { label: "In-menu promos", count: 12 },
  { label: "Infinite scroll", count: 8 },
  { label: "Mega menu", count: 12 },
  { label: "Quick view", count: 10 },
  { label: "Right-to-left", count: 2 },
  { label: "Sticky header", count: 12 },
  { label: "Stock counter", count: 11 },
  { label: "Swatch filters", count: 8 },
];

// All available templates
const allTemplates = [
  { name: "Noteable", category: "Services", image: noteableHero, path: "/afrify/templates/services/noteable", price: "$400", rating: "96%", tag: "" },
  { name: "Workflow", category: "Services", image: workflowHero, path: "/afrify/templates/services/workflow", price: "$380", rating: "87%", tag: "" },
  { name: "Grain", category: "Services", image: grainHero, path: "/afrify/templates/services/grain", price: "$380", rating: "91%", tag: "" },
  { name: "Genius", category: "Services", image: geniusHero, path: "/afrify/templates/services/genius", price: "$210", rating: "100%", tag: "" },
  { name: "Smile", category: "Services", image: smileHero, path: "/afrify/templates/services/smile", price: "$290", rating: "100%", tag: "NEW" },
  { name: "Panorama", category: "Services", image: panoramaHero, path: "/afrify/templates/services/panorama", price: "$290", rating: "100%", tag: "" },
  { name: "Printing", category: "Services", image: printingHero, path: "/afrify/templates/services/printing", price: "$320", rating: "100%", tag: "" },
  { name: "Sonik", category: "Services", image: sonikHero, path: "/afrify/templates/services/sonik", price: "$270", rating: "100%", tag: "" },
  { name: "Leap", category: "Services", image: leapHero, path: "/afrify/templates/services/leap", price: "$350", rating: "91%", tag: "" },
  { name: "Aircon", category: "Services", image: airconHero, path: "/afrify/templates/services/aircon", price: "$320", rating: "100%", tag: "" },
  { name: "Tattoo", category: "Services", image: tattooHero, path: "/afrify/templates/services/tattoo", price: "$320", rating: "100%", tag: "" },
  { name: "Enthusiast", category: "Services", image: enthusiastHero, path: "/afrify/templates/services/enthusiast", price: "$300", rating: "100%", tag: "" },
  { name: "Canvas", category: "Art", image: canvasHero, path: "/afrify/templates/art/canvas", price: "$350", rating: "95%", tag: "NEW" },
  { name: "Palette", category: "Art", image: paletteHero, path: "/afrify/templates/art/palette", price: "$280", rating: "92%", tag: "" },
  { name: "Sculpt", category: "Art", image: sculptHero, path: "/afrify/templates/art/sculpt", price: "$320", rating: "98%", tag: "" },
  { name: "Shutter", category: "Art", image: shutterHero, path: "/afrify/templates/art/shutter", price: "$290", rating: "100%", tag: "" },
  { name: "Pixel", category: "Art", image: pixelHero, path: "/afrify/templates/art/pixel", price: "$260", rating: "89%", tag: "" },
  { name: "Artisan", category: "Art", image: artisanHero, path: "/afrify/templates/art/artisan", price: "$310", rating: "96%", tag: "" },
];

type FilterSection = {
  title: string;
  options: { label: string; count?: number }[];
};

function FilterGroup({
  title,
  options,
  selected,
  onToggle,
}: {
  title: string;
  options: { label: string; count?: number }[];
  selected: string[];
  onToggle: (label: string) => void;
}) {
  const [open, setOpen] = useState(true);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className="flex items-center justify-between w-full py-3 text-sm font-semibold text-foreground hover:text-foreground/80 transition-colors">
        {title}
        <ChevronUp
          className={`h-4 w-4 transition-transform duration-200 ${
            open ? "" : "rotate-180"
          }`}
        />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="space-y-2.5 pb-4">
          {options.map((opt) => (
            <label
              key={opt.label}
              className="flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={selected.includes(opt.label)}
                  onCheckedChange={() => onToggle(opt.label)}
                  className="border-muted-foreground/40 data-[state=checked]:bg-foreground data-[state=checked]:border-foreground"
                />
                <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                  {opt.label}
                </span>
              </div>
              {opt.count !== undefined && (
                <span className="text-xs text-muted-foreground">{opt.count}</span>
              )}
            </label>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default function AfrifyTemplatesStore() {
  const [selectedPrice, setSelectedPrice] = useState<string[]>([]);
  const [selectedIndustry, setSelectedIndustry] = useState<string[]>([]);
  const [selectedCatalog, setSelectedCatalog] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const toggleFilter = (
    list: string[],
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    val: string
  ) => {
    setter(list.includes(val) ? list.filter((v) => v !== val) : [...list, val]);
  };

  const activeFilters = [
    ...selectedPrice,
    ...selectedIndustry,
    ...selectedCatalog,
    ...selectedFeatures,
  ];

  const clearAll = () => {
    setSelectedPrice([]);
    setSelectedIndustry([]);
    setSelectedCatalog([]);
    setSelectedFeatures([]);
  };

  const removeFilter = (val: string) => {
    setSelectedPrice((p) => p.filter((v) => v !== val));
    setSelectedIndustry((p) => p.filter((v) => v !== val));
    setSelectedCatalog((p) => p.filter((v) => v !== val));
    setSelectedFeatures((p) => p.filter((v) => v !== val));
  };

  // Filter templates
  const filtered = allTemplates.filter((t) => {
    if (selectedIndustry.length && !selectedIndustry.includes(t.category))
      return false;
    return true;
  });

  return (
    <PageLayout>
      <div className="container py-8">
        {/* Back link */}
        <Link
          to="/afrify"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Afrify
        </Link>

        <div className="flex gap-10">
          {/* Sidebar */}
          <aside className="hidden md:block w-64 shrink-0">
            <h1 className="text-2xl font-black mb-4">Browse themes</h1>

            {/* Active filters */}
            {activeFilters.length > 0 && (
              <div className="mb-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  Filtered by:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeFilters.map((f) => (
                    <button
                      key={f}
                      onClick={() => removeFilter(f)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-border bg-card text-xs font-medium hover:bg-muted transition-colors"
                    >
                      {f} <X className="h-3 w-3" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Price */}
            <FilterGroup
              title="Price"
              options={priceOptions}
              selected={selectedPrice}
              onToggle={(v) => toggleFilter(selectedPrice, setSelectedPrice, v)}
            />
            <Separator />

            {/* Industry */}
            <FilterGroup
              title="Industry"
              options={industryOptions.map((o) => ({ label: o }))}
              selected={selectedIndustry}
              onToggle={(v) =>
                toggleFilter(selectedIndustry, setSelectedIndustry, v)
              }
            />
            <Separator />

            {/* Catalog size */}
            <FilterGroup
              title="Catalog size"
              options={catalogSizeOptions}
              selected={selectedCatalog}
              onToggle={(v) =>
                toggleFilter(selectedCatalog, setSelectedCatalog, v)
              }
            />
            <Separator />

            {/* Features */}
            <FilterGroup
              title="Features"
              options={featureOptions}
              selected={selectedFeatures}
              onToggle={(v) =>
                toggleFilter(selectedFeatures, setSelectedFeatures, v)
              }
            />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                {filtered.length} theme{filtered.length !== 1 ? "s" : ""}
              </p>
              {activeFilters.length > 0 && (
                <button
                  onClick={clearAll}
                  className="text-sm text-muted-foreground hover:text-foreground underline transition-colors"
                >
                  Clear all
                </button>
              )}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((t, i) => (
                <Link key={t.name} to={t.path}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04 }}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-border bg-muted group-hover:shadow-lg transition-shadow duration-300">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-bold text-lg">{t.name}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="font-semibold text-foreground">{t.price}</span>
                      <span className="flex items-center gap-1 text-muted-foreground text-sm">
                        <ThumbsUp className="h-3.5 w-3.5" /> {t.rating}
                      </span>
                      {t.tag && (
                        <span className="text-xs px-2.5 py-0.5 rounded-full border border-border font-medium text-muted-foreground">
                          {t.tag}
                        </span>
                      )}
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                <LayoutGrid className="h-12 w-12 mx-auto mb-4 opacity-40" />
                <p className="text-lg font-medium">No themes match your filters</p>
                <button
                  onClick={clearAll}
                  className="mt-2 text-sm underline hover:text-foreground transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
