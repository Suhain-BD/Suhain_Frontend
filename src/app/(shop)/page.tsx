"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiStar, FiPlay, FiShield, FiTruck, FiRefreshCw } from "react-icons/fi";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section with Video */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Shuian_Webvideo.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-dark text-xs font-bold tracking-[0.3em] uppercase text-white mb-6 border border-accent/20 mt-16">
              Luxury Collection 2026
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 tracking-tight leading-[1.1]">
              The Art of <br />
              <span className="text-accent italic font-light">Ethereal</span> Scents
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Discover a world of sensory perfection where every note tells a unique story of elegance and sophistication.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" variant="gold" className="w-full sm:w-auto px-10 rounded-full">
                Shop Collection
              </Button>
              <Link href={"/about"}>
                <Button size="lg" variant="glass" className="w-full sm:w-auto px-10 rounded-full group">
                  Discover Story <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] text-white/50 tracking-[0.2em] uppercase">Scroll to explore</span>
          <div className="w-1px h-12 bg-linear-to-b from-accent to-transparent" />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-b border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: FiShield, label: "Authentic Products" },
            { icon: FiTruck, label: "Premium Shipping" },
            { icon: FiRefreshCw, label: "Easy Returns" },
            { icon: FiStar, label: "Exceptional Quality" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 justify-center">
              <item.icon className="w-6 h-6 text-accent/60" />
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Curated Collections</h2>
              <p className="text-muted-foreground">Explore our diverse range of fragrance profiles, from deep woods to light florals.</p>
            </div>
            <Link href="/collections" className="text-accent font-bold tracking-widest uppercase text-xs flex items-center gap-2 hover:translate-x-1 transition-transform">
              View All Collections <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "For Him", desc: "Bold, intense, and unmistakably masculine.", img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop" },
              { title: "For Her", desc: "Elegant, floral, and gracefully feminine.", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop" },
              { title: "Signature", desc: "Our most exclusive and unique blends.", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop" }
            ].map((cat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative h-[500px] overflow-hidden rounded-2xl cursor-pointer"
              >
                <Image
                  src={cat.img}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{cat.title}</h3>
                  <p className="text-white/60 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{cat.desc}</p>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                    <FiArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 px-6 bg-muted/20">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Best Sellers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Handpicked favorites from our community, renowned for their longevity and captivating presence.</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="group flex flex-col gap-4">
              <div className="relative aspect-3/4 overflow-hidden rounded-2xl bg-muted">
                <div className="absolute top-4 left-4 z-10 px-2 py-1 glass text-[10px] font-bold uppercase tracking-tighter rounded">New</div>
                <button className="absolute top-4 right-4 z-10 p-2 rounded-full glass hover:bg-accent hover:text-white transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                  <FiPlay className="w-4 h-4" />
                </button>
                <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-muted-foreground/30 font-serif italic text-xl">
                  Suhain No. {id}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <Button variant="gold" className="w-full rounded-xl">Quick Add</Button>
                </div>
              </div>
              <div className="text-center">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Floral • Intense</span>
                <h4 className="text-lg font-bold font-serif mt-1">Ethereal Bloom No. {id}</h4>
                <p className="text-accent font-bold mt-2">$149.00</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto relative h-[400px] rounded-3xl overflow-hidden flex items-center justify-center text-center px-12">
          <Image
            src="https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=1200&auto=format&fit=crop"
            alt="CTA Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Personalize Your Scent</h2>
            <p className="text-white/80 mb-10 max-w-xl mx-auto">Not sure which one to choose? Take our fragrance quiz to find your perfect match.</p>
            <Button size="lg" variant="gold" className="px-12 rounded-full">Start Scent Quiz</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
