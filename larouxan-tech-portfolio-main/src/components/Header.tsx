import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/ThemeToggle';

const navLinks = [
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/about', label: 'About' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
];

const Logo = () => (
  <Link to="/" className="flex items-center space-x-3" aria-label="LarouxanTech home">
    <div className="relative">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl gradient-bg flex items-center justify-center shadow-lg">
        <div className="relative w-6 h-6 sm:w-7 sm:h-7">
          <div className="absolute inset-2 bg-white/90 rounded-sm"></div>
          <div className="absolute top-0 left-1/2 w-0.5 h-2 bg-white transform -translate-x-0.5"></div>
          <div className="absolute bottom-0 left-1/2 w-0.5 h-2 bg-white transform -translate-x-0.5"></div>
          <div className="absolute left-0 top-1/2 w-2 h-0.5 bg-white transform -translate-y-0.5"></div>
          <div className="absolute right-0 top-1/2 w-2 h-0.5 bg-white transform -translate-y-0.5"></div>
          <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute bottom-1 left-1 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute bottom-1 right-1 w-1 h-1 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
    <div className="flex flex-col">
      <span className="font-bold text-lg sm:text-xl text-foreground tracking-tight">LarouxanTech</span>
      <span className="text-[10px] sm:text-xs text-muted-foreground -mt-1 tracking-wide">AUTOMATION SOLUTIONS</span>
    </div>
  </Link>
);

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between gap-2">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-foreground hover:text-primary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA + theme toggle */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="gradient-bg text-white hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
            <a href="https://calendly.com/prixieroxanbooc/30min" target="_blank" rel="noopener noreferrer">
              Book Free Call
            </a>
          </Button>
        </div>

        {/* Mobile theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] flex flex-col">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-1 mt-6 flex-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `px-3 py-3 rounded-lg text-base transition-colors ${
                        isActive
                          ? 'bg-muted text-primary font-semibold'
                          : 'text-foreground hover:bg-muted hover:text-primary'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
              <Button
                asChild
                className="gradient-bg text-white hover:opacity-90 w-full mt-4"
                onClick={() => setMobileOpen(false)}
              >
                <a href="https://calendly.com/prixieroxanbooc/30min" target="_blank" rel="noopener noreferrer">
                  Book Free Call
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
