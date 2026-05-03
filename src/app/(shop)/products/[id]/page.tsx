"use client";

import * as React from "react";
import Image from "next/image";
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
  FiChevronRight
} from "react-icons/fi";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { products } from "@/lib/data";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = React.useState(1);
  const [selectedSize, setSelectedSize] = React.useState("50ml");
  
  const product = products.find(p => p.id === id) || products[0];

  const sizes = ["30ml", "50ml", "100ml"];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground mb-12">
          <a href="/" className="hover:text-accent">Home</a>
          <FiChevronRight className="w-3 h-3" />
          <a href="/products" className="hover:text-accent">Collection</a>
          <FiChevronRight className="w-3 h-3" />
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Image Gallery */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-square rounded-3xl overflow-hidden bg-muted shadow-2xl"
            >
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover" 
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden bg-muted cursor-pointer hover:opacity-80 transition-opacity">
                   <Image src={product.image} alt="Thumbnail" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-4 block">
                {product.category} • {product.scentProfile}
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="flex text-accent">
                  {[1, 2, 3, 4, 5].map((i) => <FiStar key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-sm text-muted-foreground">(128 Reviews)</span>
              </div>

              <p className="text-3xl font-bold mb-8 tracking-tighter text-foreground/90">
                ${product.price.toFixed(2)}
              </p>

              <p className="text-muted-foreground leading-relaxed mb-10 text-lg font-light">
                {product.description} A journey through the senses, this masterpiece opens with crisp, ethereal notes before settling into a deep, lingering base that commands attention and evokes timeless elegance.
              </p>

              {/* Size Selector */}
              <div className="mb-10">
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Select Size</h4>
                <div className="flex gap-4">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "flex-1 py-3 rounded-xl border text-sm font-medium transition-all",
                        selectedSize === size 
                          ? "border-accent bg-accent/5 text-accent shadow-sm" 
                          : "border-border hover:border-accent/40 text-muted-foreground"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <div className="flex items-center justify-between p-1 bg-muted rounded-xl w-full sm:w-32">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-background rounded-lg transition-colors"
                  >
                    <FiMinus className="w-4 h-4" />
                  </button>
                  <span className="font-bold w-8 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-background rounded-lg transition-colors"
                  >
                    <FiPlus className="w-4 h-4" />
                  </button>
                </div>
                <Button variant="gold" size="lg" className="flex-1 rounded-xl gap-2 font-bold uppercase tracking-widest shadow-xl">
                  <FiShoppingBag className="w-5 h-5" /> Add to Bag
                </Button>
              </div>

              {/* Extra Info */}
              <div className="space-y-4 border-t border-border pt-8">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <FiShield className="w-5 h-5 text-accent" />
                  <span>Suhain Authenticity Guarantee</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <FiTruck className="w-5 h-5 text-accent" />
                  <span>Free Express Shipping on orders over $200</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <FiCheckCircle className="w-5 h-5 text-accent" />
                  <span>Ethically sourced ingredients</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-6 mt-12">
                 <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">
                    <FiHeart className="w-4 h-4" /> Wishlist
                 </button>
                 <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">
                    <FiShare2 className="w-4 h-4" /> Share
                 </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
