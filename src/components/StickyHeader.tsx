import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About Us", path: "/about" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact", path: "/contact" },
];

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm py-1.5 text-center font-medium hidden md:block">
        <span>🔧 24/7 Emergency Plumbing — <strong>$0 Call-Out Fee</strong> — Serving All of Canberra</span>
      </div>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-card/95 backdrop-blur-md shadow-md" : "bg-card"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-18">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-hero-gradient flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg font-display">S</span>
            </div>
            <div className="font-display font-bold text-lg leading-tight">
              <span className="text-primary">SameDay</span>
              <span className="text-foreground"> Plumbing</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-primary bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:0261234567" className="hidden sm:flex items-center gap-2 text-primary font-semibold text-sm">
              <Phone className="w-4 h-4" />
              (02) 6123 4567
            </a>
            <Button variant="cta" size="sm" asChild>
              <a href="tel:0261234567">Call Now</a>
            </Button>
            <button
              className="lg:hidden p-2 rounded-md hover:bg-accent"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t bg-card pb-4">
            <nav className="container flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-md text-sm font-medium ${
                    location.pathname === link.path
                      ? "text-primary bg-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:0261234567" className="flex items-center gap-2 px-4 py-3 text-primary font-semibold sm:hidden">
                <Phone className="w-4 h-4" /> (02) 6123 4567
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default StickyHeader;
