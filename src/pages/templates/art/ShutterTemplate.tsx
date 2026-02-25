import shutterHero from "@/assets/shutter-hero.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Camera, Film, Image, Users, Video, Star } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const services = [
  { icon: Camera, name: "Portrait Sessions", desc: "Professional portrait photography for individuals, couples, and families.", price: "From $250" },
  { icon: Film, name: "Editorial Shoots", desc: "High-fashion and editorial photography for magazines and brands.", price: "From $1,200" },
  { icon: Image, name: "Fine Art Prints", desc: "Limited edition fine art photography prints, museum-quality archival paper.", price: "From $400" },
  { icon: Users, name: "Event Photography", desc: "Discreet, documentary-style coverage for weddings and private events.", price: "From $800" },
  { icon: Video, name: "Video Production", desc: "Cinematic short films and brand documentaries in stunning 4K.", price: "From $2,000" },
  { icon: Camera, name: "Workshops", desc: "Learn photography from professionals in small, hands-on group sessions.", price: "From $150" },
];

const testimonials = [
  { name: "Zoe L.", rating: 5, text: "Shutter captured our wedding day with such artistry. Every photo is a masterpiece we'll treasure forever." },
  { name: "Marcus J.", rating: 5, text: "The portrait session was an incredible experience. The final images are gallery-worthy." },
  { name: "Amira B.", rating: 5, text: "Bought two fine art prints — they transformed our living room into a gallery." },
];

const stats = [
  { value: "10K+", label: "Photos Delivered" },
  { value: "300+", label: "Happy Clients" },
  { value: "100%", label: "Satisfaction" },
  { value: "12", label: "Awards Won" },
];

export default function ShutterTemplate() {
  return (
    <PageLayout>
      <UseTemplateButton />
      <section className="relative py-24 md:py-36 overflow-hidden" style={{ background: "linear-gradient(135deg, #111111 0%, #222222 50%, #333333 100%)" }}>
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">★ Award-Winning Photography</span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">Moments Frozen in Light</h1>
              <p className="text-lg text-white/70 mb-8 max-w-lg">Fine art and commercial photography that tells powerful stories through stunning visual narratives.</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 font-bold">View Portfolio <ArrowRight className="h-5 w-5" /></Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">Book a Session</Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="relative rounded-3xl overflow-hidden">
                <img src={shutterHero} alt="Photography portfolio" className="w-full h-full object-cover rounded-3xl" />
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

      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">From intimate portraits to grand events — we capture it all</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group p-6 rounded-2xl border border-border hover:border-foreground/20 hover:shadow-lg transition-all bg-card">
                <div className="h-12 w-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-4 group-hover:bg-foreground/10 transition-colors">
                  <s.icon className="h-6 w-6 text-foreground/70" />
                </div>
                <h3 className="text-xl font-bold mb-2">{s.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-foreground/70">{s.price}</span>
                  <Button size="sm" variant="ghost">Book →</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-14">Client Love</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl border border-border bg-card">
                <div className="flex gap-1 mb-4">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div>
                <p className="text-muted-foreground mb-4 italic">"{t.text}"</p>
                <p className="font-bold">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "linear-gradient(135deg, #111, #333)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Let's Create Together</h2>
          <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto">Book a session and let us tell your story through our lens.</p>
          <Button size="lg" className="bg-white text-black hover:bg-white/90 font-bold">Book Now</Button>
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
