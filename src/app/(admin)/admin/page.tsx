"use client";

import * as React from "react";
import { 
  FiTrendingUp, 
  FiShoppingBag, 
  FiUsers, 
  FiDollarSign,
  FiArrowUpRight,
  FiArrowDownRight
} from "react-icons/fi";
import { motion } from "framer-motion";

const DashboardPage = () => {
  const stats = [
    { name: "Total Revenue", value: "$45,231.89", change: "+20.1%", trend: "up", icon: FiDollarSign },
    { name: "Total Orders", value: "+2,350", change: "+180.1%", trend: "up", icon: FiShoppingBag },
    { name: "Active Customers", value: "+12,234", change: "+19%", trend: "up", icon: FiUsers },
    { name: "Conversion Rate", value: "3.24%", change: "-2.4%", trend: "down", icon: FiTrendingUp },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-serif font-bold tracking-tight">Overview</h2>
          <p className="text-muted-foreground">Welcome back, Admin. Here's what's happening today.</p>
        </div>
        <button className="gold-gradient text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg shadow-yellow-500/20">
          Download Report
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-background p-6 rounded-2xl border border-border shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <stat.icon className="w-5 h-5" />
              </div>
              <div className={cn(
                "flex items-center text-xs font-bold",
                stat.trend === "up" ? "text-emerald-500" : "text-rose-500"
              )}>
                {stat.change}
                {stat.trend === "up" ? <FiArrowUpRight className="w-3 h-3 ml-1" /> : <FiArrowDownRight className="w-3 h-3 ml-1" />}
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-medium">{stat.name}</p>
            <h3 className="text-2xl font-bold mt-1 tracking-tight">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-background p-8 rounded-2xl border border-border shadow-sm">
          <h3 className="text-xl font-serif font-bold mb-6">Recent Orders</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border text-xs uppercase tracking-widest text-muted-foreground">
                  <th className="pb-4 font-bold">Order ID</th>
                  <th className="pb-4 font-bold">Customer</th>
                  <th className="pb-4 font-bold">Product</th>
                  <th className="pb-4 font-bold">Amount</th>
                  <th className="pb-4 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[1, 2, 3, 4, 5].map((order) => (
                  <tr key={order} className="border-b border-border last:border-0">
                    <td className="py-4 font-mono">#ORD-00{order}</td>
                    <td className="py-4">John Doe</td>
                    <td className="py-4">Ethereal Bloom No. {order}</td>
                    <td className="py-4 font-bold">$149.00</td>
                    <td className="py-4">
                      <span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase">
                        Delivered
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-background p-8 rounded-2xl border border-border shadow-sm">
          <h3 className="text-xl font-serif font-bold mb-6">Top Scents</h3>
          <div className="space-y-6">
            {[1, 2, 3, 4].map((id) => (
              <div key={id} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center font-serif italic text-muted-foreground/40">
                  S{id}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold">Suhain No. {id}</h4>
                  <p className="text-xs text-muted-foreground">342 sales this week</p>
                </div>
                <div className="text-sm font-bold text-accent">
                  $4.2k
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper for cn (copy-paste for simplicity in this file)
const cn = (...inputs: any[]) => inputs.filter(Boolean).join(" ");

export default DashboardPage;
