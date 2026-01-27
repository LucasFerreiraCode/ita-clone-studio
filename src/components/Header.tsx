import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, User } from "lucide-react";

const navItems = [
  { 
    label: "Para você", 
    href: "#para-voce",
    submenu: [
      { label: "Conta Digital", href: "#servicos" },
      { label: "Cartão de Crédito", href: "#cartoes" },
      { label: "Empréstimos", href: "#emprestimos" },
    ]
  },
  { 
    label: "Para empresas", 
    href: "#empresas",
    submenu: [
      { label: "Conta PJ", href: "#servicos" },
      { label: "Maquininha", href: "#servicos" },
      { label: "Capital de Giro", href: "#emprestimos" },
    ]
  },
  { 
    label: "Investimentos", 
    href: "#investimentos",
    submenu: [
      { label: "Renda Fixa", href: "#servicos" },
      { label: "Renda Variável", href: "#servicos" },
      { label: "Fundos", href: "#servicos" },
    ]
  },
  { 
    label: "Cartões", 
    href: "#cartoes",
    submenu: [
      { label: "Cartão de Crédito", href: "#servicos" },
      { label: "Cartão de Débito", href: "#servicos" },
      { label: "Cartão Virtual", href: "#servicos" },
    ]
  },
  { 
    label: "Empréstimos", 
    href: "#emprestimos",
    submenu: [
      { label: "Empréstimo Pessoal", href: "#emprestimos" },
      { label: "Consignado", href: "#emprestimos" },
      { label: "Financiamento", href: "#emprestimos" },
    ]
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  };

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
          <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
                >
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                </button>
                
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-xl shadow-lg py-2 z-50 animate-fade-in">
                    {item.submenu.map((subItem) => (
                      <button
                        key={subItem.label}
                        onClick={() => scrollToSection(subItem.href)}
                        className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
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
                <div key={item.label}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                  >
                    {item.label}
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === item.label && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <button
                          key={subItem.label}
                          onClick={() => scrollToSection(subItem.href)}
                          className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
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
