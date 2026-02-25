import sculptHero from "@/assets/sculpt-hero.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Gem, Award, Eye, Crown, Landmark, Star } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const services = [
  { icon: Gem, name: "Marble Sculpture", desc: "Hand-carved marble sculptures by master artisans using traditional techniques.", price: "From $5,000" },
  { icon: Crown, name: "Bronze Casting", desc: "Lost-wax bronze casting for enduring sculptures and monuments.", price: "From $3,500" },
  { icon: Landmark, name: "Public Installations", desc: "Large-scale sculptural installations for parks, plazas, and institutions.", price: "Custom Quote" },
  { icon: Award, name: "Restoration", desc: "Expert restoration of antique and damaged sculptures to museum standards.", price: "From $800" },
  { icon: Eye, name: "Private Viewings", desc: "Exclusive gallery viewings of rare sculptural masterpieces by appointment.", price: "By Invitation" },
  { icon: Gem, name: "Collector Services", desc: "Authentication, appraisal, and acquisition advisory for serious collectors.", price: "From $300/hr" },
];

const testimonials = [
  { name: "Victoria H.", rating: 5, text: "Sculpt created a breathtaking marble piece for our estate garden. The craftsmanship is extraordinary." },
  { name: "Robert M.", rating: 5, text: "Their restoration work on our 18th-century bronze was flawless. True artisans." },
  { name: "Kenji S.", rating: 5, text: "The private viewing experience is unmatched. Every visit reveals something new and awe-inspiring." },
];

const stats = [
  { value: "200+", label: "Sculptures Created" },
  { value: "40+", label: "Master Artisans" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "25", label: "Years Legacy" },
];

export default function SculptTemplate() {
  return (
    <PageLayout>
      <UseTemplateButton />
      <section className="relative py-24 md:py-36 overflow-hidden" style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #2d2d44 100%)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gray-300/20 blur-3xl" />
        </div>
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">★ Fine Art Sculpture</span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">Timeless Sculpture, Modern Vision</h1>
              <p className="text-lg text-white/70 mb-8 max-w-lg">Masterfully crafted sculptures in marble, bronze, and mixed media. From private commissions to public monuments.</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 font-bold">View Gallery <ArrowRight className="h-5 w-5" /></Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">Private Viewing</Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="relative rounded-3xl overflow-hidden">
                <img src={sculptHero} alt="Sculpture gallery" className="w-full h-full object-cover rounded-3xl" />
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
            <h2 className="text-3xl md:text-5xl font-black mb-4">Our Expertise</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">World-class sculptural services for discerning clients</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group p-6 rounded-2xl border border-border hover:border-foreground/20 hover:shadow-lg transition-all bg-card">
                <div className="h-12 w-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-4 group-hover:bg-foreground/10 transition-colors">
                  <s.icon className="h-6 w-6 text-foreground/70" />
                </div>
                <h3 className="text-xl font-bold mb-2">{s.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                <span className="font-bold text-foreground/70">{s.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-14">Client Testimonials</h2>
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

      <section className="py-20" style={{ background: "linear-gradient(135deg, #0a0a0a, #2d2d44)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Commission Your Masterpiece</h2>
          <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto">Work with our master artisans to create a sculpture that lasts forever.</p>
          <Button size="lg" className="bg-white text-black hover:bg-white/90 font-bold">Start a Commission</Button>
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
