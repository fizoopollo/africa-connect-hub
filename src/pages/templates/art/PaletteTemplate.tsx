import paletteHero from "@/assets/palette-hero.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Brush, Layers, Sparkles, Users, GraduationCap, Star } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const offerings = [
  { icon: Brush, name: "Painting Classes", desc: "Guided painting sessions for all skill levels in acrylics, watercolors, and oils.", price: "From $45/class" },
  { icon: Layers, name: "Mixed Media", desc: "Explore collage, assemblage, and experimental techniques with expert mentors.", price: "From $60/class" },
  { icon: Sparkles, name: "Kids Art Camp", desc: "Fun creative workshops designed to inspire young artists aged 5-14.", price: "From $120/week" },
  { icon: Users, name: "Team Building", desc: "Corporate art sessions that foster creativity and collaboration.", price: "From $500/group" },
  { icon: GraduationCap, name: "Masterclasses", desc: "Intensive workshops with renowned artists covering advanced techniques.", price: "From $200" },
  { icon: Brush, name: "Open Studio", desc: "Rent studio space by the hour with all materials provided.", price: "From $25/hr" },
];

const testimonials = [
  { name: "Liam P.", rating: 5, text: "Palette reignited my passion for painting. The instructors are genuinely talented and incredibly patient." },
  { name: "Fatima A.", rating: 5, text: "My daughter's confidence has soared since joining the kids camp. She creates the most beautiful art now!" },
  { name: "Carlos V.", rating: 5, text: "The team building session was the best corporate event we've ever organized. Everyone loved it." },
];

const stats = [
  { value: "3K+", label: "Students Taught" },
  { value: "50+", label: "Weekly Classes" },
  { value: "100%", label: "Joy Guaranteed" },
  { value: "8", label: "Expert Instructors" },
];

export default function PaletteTemplate() {
  return (
    <PageLayout>
      <UseTemplateButton />
      <section className="relative py-24 md:py-36 overflow-hidden" style={{ background: "linear-gradient(135deg, #1a0a2e 0%, #4a1a6b 50%, #7b2d8e 100%)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-pink-300/20 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-purple-300/10 blur-2xl" />
        </div>
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">★ Creative Art Studio</span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">Unleash Your Inner Artist</h1>
              <p className="text-lg text-white/70 mb-8 max-w-lg">Join our vibrant creative community. Classes, workshops, and open studio time for every skill level.</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-pink-500 text-white hover:bg-pink-600 font-bold">View Classes <ArrowRight className="h-5 w-5" /></Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">Free Trial Class</Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="relative rounded-3xl overflow-hidden">
                <img src={paletteHero} alt="Art studio" className="w-full h-full object-cover rounded-3xl" />
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
            <h2 className="text-3xl md:text-5xl font-black mb-4">What We Offer</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Creative experiences for individuals, families, and teams</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((s, i) => (
              <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group p-6 rounded-2xl border border-border hover:border-pink-500/30 hover:shadow-lg transition-all bg-card">
                <div className="h-12 w-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-4 group-hover:bg-pink-500/20 transition-colors">
                  <s.icon className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{s.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-pink-600">{s.price}</span>
                  <Button size="sm" variant="ghost">Book →</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-14">Student Stories</h2>
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

      <section className="py-20" style={{ background: "linear-gradient(135deg, #1a0a2e, #7b2d8e)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Ready to Create?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto">Book your first class today and discover the artist within.</p>
          <Button size="lg" className="bg-pink-500 text-white hover:bg-pink-600 font-bold">Get Started</Button>
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
