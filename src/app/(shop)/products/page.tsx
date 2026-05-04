"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiFilter, FiChevronDown, FiSliders, FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { products } from "@/lib/data";

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const categories = ["All", "For Him", "For Her", "Signature", "Unisex"];

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">Our Collection</h1>
          <p className="text-muted-foreground">Discover the perfect scent for every occasion.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12 border-b border-border pb-8">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted hover:bg-muted/80 text-muted-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 w-full lg:w-auto">
            <div className="relative flex-1 lg:w-64">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search fragrances..."
                className="w-full bg-muted border-none pl-10 pr-4 py-2 rounded-full text-sm focus:ring-1 focus:ring-accent outline-none"
              />
            </div>
            <Button variant="outline" size="sm" className="rounded-full gap-2">
              <FiSliders className="w-4 h-4" /> Filter
            </Button>
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col gap-6"
              >
                <Link href={`/products/${product.id}`} className="relative aspect-4/5 overflow-hidden rounded-2xl bg-muted block">
                  {product.isNew && (
                    <div className="absolute top-6 left-6 z-10 px-3 py-1 glass text-[10px] font-bold uppercase tracking-widest rounded-full">New</div>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <Button variant="gold" className="w-full rounded-xl py-6 text-base font-bold shadow-2xl">Add to Bag — ${product.price}</Button>
                  </div>
                </Link>

                <div className="flex flex-col items-center text-center px-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-2">{product.scentProfile} • {product.intensity}</span>
                  <h3 className="text-2xl font-serif font-bold group-hover:text-accent transition-colors">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mt-3 line-clamp-2 max-w-[280px]">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
