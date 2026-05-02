import { motion } from "framer-motion";
import { getCloudinaryUrl } from "@/lib/cloudinary";

export default function HeroSection() {
  return (
    <div className="relative h-screen flex items-center justify-center text-center bg-black text-white overflow-hidden">
      <video autoPlay muted loop className="absolute w-full h-full object-cover opacity-40">
        <source src={getCloudinaryUrl("hero.mp4")} type="video/mp4" />
      </video>

      <motion.div className="relative z-10" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-6xl font-bold">Victoria Emife</h1>
        <p className="mt-4 opacity-70">Marketing Strategist & Brand Growth Designer</p>
      </motion.div>
    </div>
  );
}