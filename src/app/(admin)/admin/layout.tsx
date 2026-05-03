"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  FiLayout, 
  FiPackage, 
  FiShoppingBag, 
  FiUsers, 
  FiSettings, 
  FiLogOut, 
  FiMenu,
  FiX,
  FiBell
} from "react-icons/fi";
import { cn } from "@/lib/utils";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/admin", icon: FiLayout },
    { name: "Products", href: "/admin/products", icon: FiPackage },
    { name: "Orders", href: "/admin/orders", icon: FiShoppingBag },
    { name: "Customers", href: "/admin/customers", icon: FiUsers },
    { name: "Settings", href: "/admin/settings", icon: FiSettings },
  ];

  return (
    <div className="flex min-h-screen bg-muted/20 text-foreground">
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-50 bg-background border-r border-border transition-all duration-300",
          isSidebarOpen ? "w-64" : "w-20"
        )}
      >
        <div className="flex h-16 items-center justify-between px-6 border-b border-border">
          {isSidebarOpen && (
            <span className="text-xl font-serif font-bold tracking-widest">
              <span className="text-accent">S</span>UHAIN
            </span>
          )}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1 rounded-md hover:bg-muted transition-colors"
          >
            {isSidebarOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5 mx-auto" />}
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group",
                pathname === item.href 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              {isSidebarOpen && <span className="font-medium">{item.name}</span>}
              {!isSidebarOpen && (
                <div className="absolute left-16 scale-0 group-hover:scale-100 transition-transform bg-background border border-border px-2 py-1 rounded text-xs z-50">
                  {item.name}
                </div>
              )}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-4 left-0 right-0 px-4">
          <button className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all">
            <FiLogOut className="w-5 h-5 shrink-0" />
            {isSidebarOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main 
        className={cn(
          "flex-1 transition-all duration-300",
          isSidebarOpen ? "pl-64" : "pl-20"
        )}
      >
        {/* Top Header */}
        <header className="sticky top-0 z-40 h-16 bg-background/80 backdrop-blur-md border-b border-border px-8 flex items-center justify-between">
          <h1 className="text-lg font-bold">Admin Panel</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-muted relative">
              <FiBell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-background" />
            </button>
            <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
              A
            </div>
          </div>
        </header>

        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
