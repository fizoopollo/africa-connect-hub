import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Clock, MapPin, Calendar, CheckCircle2 } from "lucide-react";

const services = [
  { name: "Home Cleaning", price: "From $30", duration: "2-4 hrs", rating: 4.9, reviews: 234, image: "from-blue-400 to-cyan-500", available: true },
  { name: "Plumbing Repair", price: "From $50", duration: "1-3 hrs", rating: 4.7, reviews: 189, image: "from-slate-500 to-slate-700", available: true },
  { name: "Hair Braiding", price: "From $25", duration: "2-5 hrs", rating: 4.8, reviews: 412, image: "from-purple-400 to-violet-600", available: false },
  { name: "Catering Services", price: "From $200", duration: "Custom", rating: 4.9, reviews: 97, image: "from-amber-400 to-orange-500", available: true },
  { name: "Photography", price: "From $80", duration: "1-8 hrs", rating: 4.6, reviews: 156, image: "from-rose-400 to-pink-500", available: true },
  { name: "Tutoring", price: "From $15/hr", duration: "Flexible", rating: 4.8, reviews: 301, image: "from-emerald-400 to-green-600", available: true },
];

export default function ServicesTemplate() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-violet-500 to-purple-700 overflow-hidden">
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-black text-primary-foreground mb-4">
              Service Hub
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Book trusted local professionals in minutes
            </p>
            <Link to="/afrify">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <ArrowLeft className="h-4 w-4" /> Back to Templates
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-black mb-8">Available Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-2xl border border-border overflow-hidden"
              >
                <div className={`relative h-40 bg-gradient-to-br ${service.image}`}>
                  {service.available ? (
                    <span className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                      <CheckCircle2 className="h-3 w-3" /> Available
                    </span>
                  ) : (
                    <span className="absolute top-3 right-3 px-2 py-1 bg-muted text-muted-foreground text-xs font-bold rounded-full">
                      Fully Booked
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-1">{service.name}</h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {service.duration}</span>
                    <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-accent text-accent" /> {service.rating} ({service.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">{service.price}</span>
                    <Button size="sm" disabled={!service.available}>
                      <Calendar className="h-4 w-4" /> Book Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
