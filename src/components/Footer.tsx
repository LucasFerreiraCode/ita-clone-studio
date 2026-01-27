import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

const footerLinks = {
  "Para você": [
    "Conta corrente",
    "Cartão de crédito",
    "Empréstimo pessoal",
    "Financiamento",
    "Investimentos",
    "Seguros",
  ],
  "Para empresas": [
    "Conta PJ",
    "Cartão empresarial",
    "Maquininha",
    "Capital de giro",
    "Folha de pagamento",
  ],
  "Sobre o Itaú": [
    "Quem somos",
    "Relação com investidores",
    "Sustentabilidade",
    "Carreiras",
    "Imprensa",
  ],
  "Ajuda": [
    "Central de ajuda",
    "Segurança",
    "Ouvidoria",
    "SAC",
    "Deficiente auditivo",
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Linkedin, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Social */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">i</span>
              </div>
              <span className="text-2xl font-bold">itaú</span>
            </a>
            <p className="text-secondary-foreground/70 text-sm mb-6">
              Feito com você. Para você.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60">
              © 2025 Itaú Unibanco. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-secondary-foreground/60">
              <a href="#" className="hover:text-primary transition-colors">
                Termos de uso
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Política de privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
