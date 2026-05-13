"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  FiStar,
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiHeart,
  FiShare2,
  FiShield,
  FiTruck,
  FiCheckCircle,
  FiChevronRight,
  FiInfo,
  FiWind
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { products } from "@/lib/data";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = React.useState(1);
  const [selectedSize, setSelectedSize] = React.useState("50ml");
  const [activeImage, setActiveImage] = React.useState(0);

  const product = products.find(p => p.id === id) || products[0];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const sizes = ["30ml", "50ml", "100ml"];

  // Scent notes mock data based on profile
  const getNotes = (profile: string) => {
    switch (profile) {
      case "Floral": return { top: "Jasmine, Neroli", heart: "Damask Rose, Peony", base: "White Musk, Sandalwood" };
      case "Woody": return { top: "Bergamot, Cardamom", heart: "Cedarwood, Patchouli", base: "Sandalwood, Vetiver" };
      case "Oriental": return { top: "Saffron, Cinnamon", heart: "Oud, Amber", base: "Vanilla, Benzoin" };
      case "Spicy": return { top: "Black Pepper, Ginger", heart: "Clove, Nutmeg", base: "Leather, Tobacco" };
      case "Fresh": return { top: "Sea Salt, Lemon", heart: "Ozone, Water Lily", base: "Ambergris, Driftwood" };
      default: return { top: "Bergamot, Lavender", heart: "Geranium, Sage", base: "Oakmoss, Tonka Bean" };
    }
  };

  const notes = getNotes(product.scentProfile);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-texture opacity-[0.03] pointer-events-none" />

      <div className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-12">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <FiChevronRight className="w-3 h-3 opacity-30" />
            <Link href="/products" className="hover:text-accent transition-colors">Collection</Link>
            <FiChevronRight className="w-3 h-3 opacity-30" />
            <span className="text-foreground font-bold">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Image Gallery */}
            <div className="lg:col-span-7 space-y-8">
              <div className="relative aspect-4/5 rounded-2rem overflow-hidden bg-muted shadow-2xl group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />

                {/* Product Badge */}
                {product.isNew && (
                  <div className="absolute top-8 left-8 z-10 px-4 py-2 glass-dark text-[10px] font-bold uppercase tracking-[0.2em] rounded-full text-white">
                    Exclusive Release
                  </div>
                )}
              </div>

              <div className="grid grid-cols-4 gap-6">
                {[0, 1, 2, 3].map((i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={cn(
                      "relative aspect-square rounded-2xl overflow-hidden bg-muted transition-all duration-300",
                      activeImage === i
                        ? "ring-2 ring-accent ring-offset-4 ring-offset-background"
                        : "opacity-60 hover:opacity-100 hover:scale-105"
                    )}
                  >
                    <Image src={product.image} alt="Thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:col-span-5 flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold">
                    {product.category}
                  </span>
                  <div className="h-px w-8 bg-accent/30" />
                  <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
                    {product.scentProfile}
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 tracking-tight leading-[1.1] text-foreground">
                  {product.name}
                </h1>

                <div className="flex items-center gap-6 mb-10">
                  <div className="flex text-accent gap-1">
                    {[1, 2, 3, 4, 5].map((i) => <FiStar key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">128 Reviews</span>
                  <div className="h-4 w-px bg-border" />
                  <span className="text-[10px] uppercase tracking-widest text-accent font-bold">{product.intensity} Intensity</span>
                </div>

                <div className="flex items-baseline gap-4 mb-10">
                  <span className="text-4xl font-bold tracking-tighter text-foreground">${product.price.toFixed(2)}</span>
                  <span className="text-sm text-muted-foreground line-through opacity-50">$199.00</span>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-12 text-lg font-light">
                  {product.description} A masterpiece of olfactory art, crafted for those who demand nothing less than perfection. This fragrance transcends the ordinary, offering a sensory journey that lingers long after the first encounter.
                </p>

                {/* Scent Pyramid */}
                <div className="bg-muted/30 rounded-2rem p-8 mb-12 border border-border/50 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-6">
                    <FiWind className="text-accent" />
                    <h4 className="text-xs font-bold uppercase tracking-widest">Scent Architecture</h4>
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Top Notes</span>
                      <span className="text-sm font-serif italic text-right">{notes.top}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Heart Notes</span>
                      <span className="text-sm font-serif italic text-right">{notes.heart}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Base Notes</span>
                      <span className="text-sm font-serif italic text-right">{notes.base}</span>
                    </div>
                  </div>
                </div>

                {/* Size Selector */}
                <div className="mb-12">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest">Select Size</h4>
                    <button className="text-[10px] uppercase tracking-widest text-accent font-bold hover:underline">Size Guide</button>
                  </div>
                  <div className="flex gap-4">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          "flex-1 py-4 rounded-2xl border text-xs font-bold uppercase tracking-widest transition-all duration-300",
                          selectedSize === size
                            ? "border-accent bg-accent/5 text-accent shadow-inner"
                            : "border-border hover:border-accent/40 text-muted-foreground"
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity and Add to Cart */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <div className="flex items-center justify-between p-1.5 bg-muted rounded-2xl w-full sm:w-36 border border-border/50">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-background rounded-xl transition-colors text-muted-foreground hover:text-foreground"
                    >
                      <FiMinus className="w-4 h-4" />
                    </button>
                    <span className="font-bold w-8 text-center text-sm">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-background rounded-xl transition-colors text-muted-foreground hover:text-foreground"
                    >
                      <FiPlus className="w-4 h-4" />
                    </button>
                  </div>
                  <Button variant="gold" size="lg" className="flex-1 rounded-2xl gap-3 font-bold uppercase tracking-[0.2em] shadow-2xl py-8 text-sm group">
                    <FiShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" /> Add to Bag
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-border/50">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center">
                      <FiShield className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-[8px] uppercase tracking-widest font-bold text-muted-foreground">Certified<br />Authentic</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center">
                      <FiTruck className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-[8px] uppercase tracking-widest font-bold text-muted-foreground">Express<br />Shipping</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center">
                      <FiCheckCircle className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-[8px] uppercase tracking-widest font-bold text-muted-foreground">Ethically<br />Sourced</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-center gap-12 mt-12">
                  <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors group">
                    <FiHeart className="w-4 h-4 group-hover:fill-accent transition-all" /> Add to Wishlist
                  </button>
                  <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors group">
                    <FiShare2 className="w-4 h-4" /> Share Experience
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <section className="py-32 px-6 border-t border-border/50 bg-muted/20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <span className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold mb-4 block">Recommended</span>
              <h2 className="text-4xl font-serif font-bold">You May Also Desire</h2>
            </div>
            <Link href="/products" className="text-[10px] uppercase tracking-widest font-bold text-accent hover:underline">View All Collection</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((relProduct) => (
              <Link key={relProduct.id} href={`/products/${relProduct.id}`} className="group flex flex-col gap-6">
                <div className="relative aspect-3/4 overflow-hidden rounded-2rem bg-muted shadow-lg">
                  <Image
                    src={relProduct.image}
                    alt={relProduct.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-full py-4 glass-dark rounded-xl text-[10px] font-bold uppercase tracking-widest text-white text-center">Discover Scent</div>
                  </div>
                </div>
                <div className="text-center px-4">
                  <span className="text-[8px] uppercase tracking-[0.3em] text-muted-foreground font-bold">{relProduct.scentProfile}</span>
                  <h4 className="text-xl font-serif font-bold mt-2 group-hover:text-accent transition-colors">{relProduct.name}</h4>
                  <p className="text-accent font-bold mt-2 text-sm">${relProduct.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
