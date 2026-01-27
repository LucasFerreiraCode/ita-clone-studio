import { CreditCard, Wallet, TrendingUp, Home, Car, Shield, Smartphone, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: CreditCard,
    title: "Cartões",
    description: "Cartões de crédito e débito com benefícios exclusivos e cashback.",
    color: "bg-itau-orange-light text-primary",
  },
  {
    icon: Wallet,
    title: "Conta Digital",
    description: "Conta gratuita, sem tarifas de manutenção e com Pix ilimitado.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Investimentos",
    description: "CDB, LCI, fundos e ações. Invista a partir de R$ 1.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Home,
    title: "Financiamento Imobiliário",
    description: "As melhores taxas para você realizar o sonho da casa própria.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Car,
    title: "Financiamento de Veículos",
    description: "Condições especiais para financiar seu carro novo ou usado.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Banknote,
    title: "Empréstimos",
    description: "Crédito pessoal com taxas a partir de 1,49% ao mês.",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: Shield,
    title: "Seguros",
    description: "Proteção para você, sua família, casa e veículos.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Smartphone,
    title: "Pix",
    description: "Transferências gratuitas, 24h por dia, 7 dias por semana.",
    color: "bg-cyan-50 text-cyan-600",
  },
];

export function Services() {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-itau-orange-light text-primary rounded-full text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Tudo o que você precisa
            <br />
            em um só lugar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para cuidar do seu dinheiro, investir no seu futuro 
            e realizar seus sonhos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="gap-2">
            Ver todos os produtos
          </Button>
        </div>
      </div>
    </section>
  );
}
