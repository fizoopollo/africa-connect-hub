import canvasHero from "@/assets/canvas-hero.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Palette, Frame, Eye, Image, Brush, Star } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const collections = [
  { icon: Palette, name: "Oil Paintings", desc: "Richly textured original oil paintings on premium linen canvas.", price: "From $1,200" },
  { icon: Frame, name: "Framed Prints", desc: "Museum-quality giclée prints in handcrafted wooden frames.", price: "From $180" },
  { icon: Eye, name: "Exhibitions", desc: "Curated gallery exhibitions featuring emerging and established artists.", price: "Free Entry" },
  { icon: Image, name: "Photography", desc: "Limited edition fine art photography prints, signed and numbered.", price: "From $350" },
  { icon: Brush, name: "Commissions", desc: "Custom artwork created to your specifications by our resident artists.", price: "From $800" },
  { icon: Frame, name: "Art Consulting", desc: "Professional art advisory for collectors, homes, and corporate spaces.", price: "From $150/hr" },
];

const testimonials = [
  { name: "Elena R.", rating: 5, text: "Canvas helped me build my first serious art collection. The curation is impeccable and the advisory service is invaluable." },
  { name: "James T.", rating: 5, text: "The gallery space is breathtaking. Every exhibition feels like a journey through the artist's mind." },
  { name: "Priya N.", rating: 5, text: "Commissioned a custom piece for our office lobby — the result exceeded all expectations." },
];

const stats = [
  { value: "500+", label: "Artworks Sold" },
  { value: "120+", label: "Artists Featured" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "15", label: "Years Experience" },
];

export default function CanvasTemplate() {
  return (
    <PageLayout>
      <UseTemplateButton />
      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden" style={{ background: "linear-gradient(135deg, #2c1810 0%, #4a2c1a 50%, #6b3a20 100%)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-amber-200/20 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-orange-200/10 blur-2xl" />
        </div>
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
                ★ Premier Art Gallery
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                Discover Art That Speaks to You
              </h1>
              <p className="text-lg text-white/70 mb-8 max-w-lg">
                Curated collections of contemporary and classical artwork. From gallery exhibitions to private commissions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-amber-500 text-white hover:bg-amber-600 font-bold">
                  Explore Collection <ArrowRight className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Book a Visit
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="relative rounded-3xl overflow-hidden">
                <img src={canvasHero} alt="Art gallery" className="w-full h-full object-cover rounded-3xl" />
                <div className="absolute inset-0 bg-black/40 rounded-3xl" />
                <div className="absolute inset-0 p-8 grid grid-cols-2 gap-4 items-end">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
                      <p className="text-3xl font-black text-white">{s.value}</p>
                      <p className="text-sm text-white/60 mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Our Collections</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Explore our curated offerings for art lovers and collectors</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((s, i) => (
              <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group p-6 rounded-2xl border border-border hover:border-amber-500/30 hover:shadow-lg transition-all bg-card">
                <div className="h-12 w-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <s.icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{s.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-amber-600">{s.price}</span>
                  <Button size="sm" variant="ghost">View →</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-14">What Collectors Say</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl border border-border bg-card">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{t.text}"</p>
                <p className="font-bold">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #2c1810, #6b3a20)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Start Your Collection</h2>
          <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto">Visit our gallery or browse online to find the perfect piece for your space.</p>
          <Button size="lg" className="bg-amber-500 text-white hover:bg-amber-600 font-bold">Browse Gallery</Button>
        </div>
      </section>

      <section className="py-8 bg-muted/30">
        <div className="container text-center">
          <Link to="/afrify/templates-store"><Button variant="ghost"><ArrowLeft className="h-4 w-4" /> Back to Templates</Button></Link>
        </div>
      </section>
    </PageLayout>
  );
}
