import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export default function UseTemplateButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link to="/signup">
        <Button size="lg" className="rounded-full shadow-xl px-6 font-bold gap-2">
          <Rocket className="h-5 w-5" /> Use This Template
        </Button>
      </Link>
    </motion.div>
  );
}
