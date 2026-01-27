import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-hero-gradient flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary-foreground/20 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-primary-foreground/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-20 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              🎉 Novo: Conta digital sem tarifas
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Sua vida financeira
              <br />
              <span className="text-secondary">mais simples</span>
            </h1>
            <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 max-w-lg">
              Abra sua conta gratuita e tenha acesso a cartão de crédito, investimentos, 
              empréstimos e muito mais. Tudo pelo app.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" className="gap-2">
                Abrir minha conta
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="xl" className="gap-2">
                <Play className="w-5 h-5" />
                Veja como funciona
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-primary-foreground/20">
              <div>
                <p className="text-3xl font-bold">70M+</p>
                <p className="text-sm text-primary-foreground/80">Clientes</p>
              </div>
              <div>
                <p className="text-3xl font-bold">100+</p>
                <p className="text-sm text-primary-foreground/80">Anos de história</p>
              </div>
              <div>
                <p className="text-3xl font-bold">4.8★</p>
                <p className="text-sm text-primary-foreground/80">App Store</p>
              </div>
            </div>
          </div>

          {/* Hero Image/Card */}
          <div className="relative lg:pl-12 animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Phone Mockup */}
              <div className="bg-secondary rounded-[3rem] p-3 shadow-2xl max-w-[320px] mx-auto">
                <div className="bg-background rounded-[2.5rem] overflow-hidden">
                  {/* App Screen */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-hero-gradient rounded-full" />
                      <div>
                        <p className="font-semibold text-foreground">Olá, Maria</p>
                        <p className="text-sm text-muted-foreground">Bom dia! ☀️</p>
                      </div>
                    </div>
                    <div className="bg-muted rounded-2xl p-4 mb-4">
                      <p className="text-sm text-muted-foreground mb-1">Saldo disponível</p>
                      <p className="text-2xl font-bold text-foreground">R$ 12.458,90</p>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                      {["Pix", "Pagar", "Cartão", "Invest"].map((item) => (
                        <div key={item} className="flex flex-col items-center gap-2">
                          <div className="w-12 h-12 bg-itau-orange-light rounded-xl flex items-center justify-center">
                            <div className="w-6 h-6 bg-primary rounded-lg" />
                          </div>
                          <span className="text-xs text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-8 top-20 bg-background rounded-2xl shadow-card p-4 animate-scale-in" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Pix enviado</p>
                    <p className="text-xs text-muted-foreground">R$ 150,00</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-32 bg-background rounded-2xl shadow-card p-4 animate-scale-in" style={{ animationDelay: "0.6s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-itau-orange-light rounded-full flex items-center justify-center">
                    <span className="text-primary">📈</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Investimentos</p>
                    <p className="text-xs text-green-600">+2.4% hoje</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
