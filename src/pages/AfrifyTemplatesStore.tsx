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
import { ChevronUp, X, LayoutGrid, ArrowLeft } from "lucide-react";

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
  { name: "Fashion Forward", category: "Clothing", color: "from-pink-500 to-rose-500", path: "/afrify/templates/fashion", price: "Free" },
  { name: "Fresh Market", category: "Food and drink", color: "from-emerald-500 to-green-500", path: "/afrify/templates/food", price: "Free" },
  { name: "TechStore Pro", category: "Electronics", color: "from-blue-500 to-indigo-500", path: "/afrify/templates/electronics", price: "Free" },
  { name: "Artisan Crafts", category: "Home", color: "from-amber-500 to-orange-500", path: "/afrify/templates/handmade", price: "Free" },
  { name: "Service Hub", category: "Services", color: "from-violet-500 to-purple-500", path: "/afrify/templates/services", price: "Paid" },
  { name: "Beauty Glow", category: "Beauty", color: "from-rose-400 to-pink-500", path: "/afrify/templates/beauty", price: "Free" },
  { name: "Genius", category: "Services", color: "from-cyan-500 to-blue-600", path: "/afrify/templates/services/genius", price: "Paid" },
  { name: "Workflow", category: "Services", color: "from-slate-500 to-gray-700", path: "/afrify/templates/services/workflow", price: "Paid" },
  { name: "Grain", category: "Food and drink", color: "from-yellow-600 to-amber-700", path: "/afrify/templates/services/grain", price: "Paid" },
  { name: "Smile", category: "Wellness", color: "from-teal-400 to-emerald-500", path: "/afrify/templates/services/smile", price: "Paid" },
  { name: "Panorama", category: "Art", color: "from-indigo-400 to-purple-600", path: "/afrify/templates/services/panorama", price: "Paid" },
  { name: "Printing", category: "Services", color: "from-orange-400 to-red-500", path: "/afrify/templates/services/printing", price: "Paid" },
  { name: "Sonik", category: "Entertainment", color: "from-fuchsia-500 to-pink-600", path: "/afrify/templates/services/sonik", price: "Paid" },
  { name: "Leap", category: "Services", color: "from-green-400 to-teal-500", path: "/afrify/templates/services/leap", price: "Paid" },
  { name: "Aircon", category: "Home", color: "from-sky-400 to-blue-500", path: "/afrify/templates/services/aircon", price: "Paid" },
  { name: "Enthusiast", category: "Sports", color: "from-red-500 to-orange-500", path: "/afrify/templates/services/enthusiast", price: "Paid" },
  { name: "Tattoo Studio", category: "Art", color: "from-gray-700 to-black", path: "/afrify/templates/services/tattoo", price: "Paid" },
  { name: "Noteable", category: "Services", color: "from-lime-400 to-green-500", path: "/afrify/templates/services/noteable", price: "Free" },
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
    if (selectedPrice.length && !selectedPrice.includes(t.price)) return false;
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

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((t, i) => (
                <Link key={t.name} to={t.path}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04 }}
                    className="group cursor-pointer"
                  >
                    <div
                      className={`h-48 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center mb-3 group-hover:scale-[1.02] transition-transform duration-300`}
                    >
                      <LayoutGrid className="h-12 w-12 text-primary-foreground/60" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold">{t.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {t.category}
                        </p>
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">
                        {t.price}
                      </span>
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
