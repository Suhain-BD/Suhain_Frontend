import Link from "next/link";
import { FiInstagram, FiFacebook, FiTwitter, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-muted py-16 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div className="space-y-6">
          <Link href="/" className="text-2xl font-serif font-bold tracking-widest text-foreground">
            <span className="text-accent">S</span>UHAIN
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Crafting timeless fragrances that capture the essence of luxury and sophistication. Each bottle is a masterpiece, designed to evoke emotions and create memories.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full bg-background border border-border hover:text-accent hover:border-accent transition-all">
              <FiInstagram className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-background border border-border hover:text-accent hover:border-accent transition-all">
              <FiFacebook className="w-4 h-4" />
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link href="/products" className="text-sm text-muted-foreground hover:text-accent transition-colors">Shop All</Link></li>
            <li><Link href="/collections" className="text-sm text-muted-foreground hover:text-accent transition-colors">Collections</Link></li>
            <li><Link href="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">Our Story</Link></li>
            <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="font-serif text-lg font-bold mb-6">Customer Care</h4>
          <ul className="space-y-4">
            <li><Link href="/shipping" className="text-sm text-muted-foreground hover:text-accent transition-colors">Shipping & Returns</Link></li>
            <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-accent transition-colors">FAQ</Link></li>
            <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-accent transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-serif text-lg font-bold mb-6">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
          <form className="space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-background border border-border px-4 py-3 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
            <button className="w-full gold-gradient text-white py-3 rounded-md text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} SUHAIN. All rights reserved.
        </p>
        <div className="flex gap-6">
          <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">Premium Fragrances</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
