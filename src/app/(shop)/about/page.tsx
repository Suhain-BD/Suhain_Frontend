"use client";


import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";


const StoryPage = () => {
  return (
    <div className="min-h-screen bg-background relative selection:bg-accent/20 overflow-x-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 bg-texture opacity-[0.02] pointer-events-none" />

      <div className="pt-48 pb-40 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header/Slogan */}
          <div className="text-center mb-40 relative py-24 md:py-32 rounded-[3rem] overflow-hidden border border-border/20 shadow-2xl">
            {/* Stable Background Image */}
            <Image
              src="/Suhain_img.jpeg"
              alt="Suhain Background"
              fill
              className="object-cover"
              priority
            />
            {/* Simple, Solid Overlay to prevent flickering */}
            <div className="absolute inset-0 bg-black/60" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative z-10 px-6"
            >
              <Link
                href="/"
                className="relative h-12 w-40 hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/Suhain png.png"
                  alt="SUHAIN"
                  fill
                  className="object-contain"
                  priority
                />
              </Link>
              <p className="text-xl md:text-3xl font-serif italic text-white tracking-widest drop-shadow-lg">
                Smell fresh, anytime, anywhere.
              </p>
            </motion.div>
          </div>

          <div className="space-y-40">
            {/* Why Suhain */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent mb-10">Why Suhain</h2>
              <p className="text-3xl md:text-5xl font-serif leading-[1.15] text-foreground tracking-tight">
                Most people don’t want a loud fragrance. Just something that feels right on them.
                Suhain is made for that simple need, a scent that feels clean, balanced, and easy to wear every day.
              </p>
            </motion.section>

            {/* Minimalist Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative aspect-video md:aspect-21/9 rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <Image
                src="/suhain_minimalist.png"
                alt="Suhain Minimalism"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-background/5" />
            </motion.div>

            {/* What We Create */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-4">
                <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent">What We Create</h2>
              </div>
              <div className="md:col-span-8 space-y-16">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl font-serif font-bold mb-4">Sophisticated fragrances</h3>
                  <p className="text-xl text-muted-foreground font-light leading-relaxed">For everyday elegance.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl font-serif font-bold mb-4">Carefully balanced compositions</h3>
                  <p className="text-xl text-muted-foreground font-light leading-relaxed">With depth and clarity.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl font-serif font-bold mb-4">Long lasting scents</h3>
                  <p className="text-xl text-muted-foreground font-light leading-relaxed">With a smooth, refined finish.</p>
                </motion.div>
              </div>
            </section>

            {/* Our Philosophy */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="py-32 border-y border-border/40 text-center"
            >
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent mb-16">Our Philosophy</h2>
              <p className="text-4xl md:text-6xl font-serif italic text-foreground leading-[1.1] tracking-tight max-w-4xl mx-auto">
                "Each fragrance is developed with precision — focusing on harmony, texture, and wearability.
                Nothing is loud or excessive, everything is intentional."
              </p>
            </motion.section>

            {/* For You */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-20 items-start"
            >
              <div className="md:col-span-4">
                <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent">For You</h2>
              </div>
              <div className="md:col-span-8">
                <p className="text-3xl font-serif text-muted-foreground leading-snug tracking-tight">
                  Suhain is chosen by those who value understated luxury — individuals who prefer presence without effort and elegance without excess.
                </p>
              </div>
            </motion.section>
          </div>

          {/* Final Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="pt-40 text-center"
          >
            <div className="h-px w-12 bg-accent/30 mx-auto mb-12" />
            <p className="text-sm uppercase tracking-[0.6em] font-bold text-accent">Suhain</p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default StoryPage;
