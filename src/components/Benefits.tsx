import { Check, Star, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Conta 100% digital e gratuita",
  "Cartão de crédito sem anuidade",
  "Pix ilimitado e gratuito",
  "Atendimento 24 horas pelo app",
  "Programa de pontos e cashback",
  "Investimentos a partir de R$ 1",
];

const highlights = [
  {
    icon: Star,
    title: "Melhor app de banco",
    description: "Nota 4.8 na App Store e Google Play",
  },
  {
    icon: Shield,
    title: "Segurança total",
    description: "Tecnologia de ponta para proteger seu dinheiro",
  },
  {
    icon: Clock,
    title: "Conta em minutos",
    description: "Abra sua conta em menos de 5 minutos",
  },
];

export function Benefits() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-itau-orange-light text-primary rounded-full text-sm font-medium mb-4">
              Por que escolher o Itaú
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Mais que um banco,
              <br />
              <span className="text-gradient">um parceiro</span> para a vida
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Há mais de 100 anos ajudando brasileiros a realizar seus sonhos. 
              Com tecnologia de ponta e atendimento humanizado.
            </p>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit} 
                  className="flex items-center gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="gap-2">
              Quero ser cliente
            </Button>
          </div>

          {/* Right Content - Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="bg-muted rounded-2xl p-6 flex items-start gap-5 hover:shadow-card transition-shadow animate-slide-in-right"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-14 h-14 bg-hero-gradient rounded-2xl flex items-center justify-center flex-shrink-0">
                  <highlight.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Testimonial */}
            <div className="bg-secondary text-secondary-foreground rounded-2xl p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg mb-4">
                "Melhor banco que já usei! O app é muito fácil e o atendimento é excelente. 
                Recomendo para todos!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full" />
                <div>
                  <p className="font-medium">Maria Silva</p>
                  <p className="text-sm text-secondary-foreground/70">Cliente há 5 anos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
