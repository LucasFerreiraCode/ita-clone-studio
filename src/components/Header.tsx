import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, User } from "lucide-react";

const navItems = [
  { label: "Para você", href: "#para-voce", hasSubmenu: true },
  { label: "Para empresas", href: "#empresas", hasSubmenu: true },
  { label: "Investimentos", href: "#investimentos", hasSubmenu: true },
  { label: "Cartões", href: "#cartoes", hasSubmenu: true },
  { label: "Empréstimos", href: "#emprestimos", hasSubmenu: true },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">i</span>
            </div>
            <span className="text-2xl font-bold text-foreground">itaú</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
              >
                {item.label}
                {item.hasSubmenu && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="gap-2">
              <User className="w-4 h-4" />
              Entrar
            </Button>
            <Button size="sm">Abra sua conta</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {item.label}
                  {item.hasSubmenu && <ChevronDown className="w-5 h-5 text-muted-foreground" />}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
              <Button variant="outline" className="w-full gap-2">
                <User className="w-4 h-4" />
                Entrar
              </Button>
              <Button className="w-full">Abra sua conta</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
