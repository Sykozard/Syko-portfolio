import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-[#09090B]/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex flex-col leading-tight" data-testid="link-logo">
          <span className="text-xl font-bold tracking-tight gradient-text">Kaustav</span>
          <span className="text-[10px] font-medium text-white/40 tracking-widest uppercase -mt-0.5">aka Syko</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              data-testid={`link-nav-${link.name.toLowerCase()}`}
              className="text-sm font-medium text-white/60 transition-colors hover:text-white relative group"
            >
              {link.name}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <button
          className="text-white/70 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-b border-white/10 bg-[#09090B]/95 backdrop-blur-md px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
