"use client";

import { Home, Package, ImageIcon, User, Mail } from "lucide-react";
import { SmoothScrollLink } from "@/components/smooth-scroll-link";

interface FloatingMobileNavProps {
  activeSection: string;
}

export function FloatingMobileNav({ activeSection }: FloatingMobileNavProps) {
  const navItems = [
    { href: "#home", icon: Home, label: "Home" },
    { href: "#products", icon: Package, label: "Products" },

    { href: "#about", icon: User, label: "About" },
    { href: "#contact", icon: Mail, label: "Contact" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
      <div className="bg-white/20 backdrop-blur-md rounded-full shadow-xl border border-white/30 px-4 py-3">
        <div className="flex items-center space-x-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.slice(1);

            return (
              <SmoothScrollLink
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-l from-blue-400 to-cyan-500 text-white shadow-md"
                    : "text-gray-700 hover:text-blue-500 hover:bg-white/20"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {isActive && (
                  <span className="text-sm font-medium whitespace-nowrap">
                    {item.label}
                  </span>
                )}
                {!isActive && <span className="sr-only">{item.label}</span>}
              </SmoothScrollLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
