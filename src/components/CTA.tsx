import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full mb-6">
            <Smartphone className="w-5 h-5" />
            <span className="text-sm font-medium">Baixe o app agora</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Comece a transformar
            <br />
            sua vida financeira hoje
          </h2>
          
          <p className="text-lg lg:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Abra sua conta em poucos minutos, diretamente pelo celular. 
            Sem burocracia, sem filas, sem complicação.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="hero" size="xl" className="gap-2">
              Abrir conta grátis
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Já sou cliente
            </Button>
          </div>

          {/* App Store Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="bg-secondary text-secondary-foreground px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-itau-navy-light transition-colors">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <div className="text-left">
                <p className="text-xs opacity-80">Baixar na</p>
                <p className="font-semibold">App Store</p>
              </div>
            </a>
            <a href="#" className="bg-secondary text-secondary-foreground px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-itau-navy-light transition-colors">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
              </svg>
              <div className="text-left">
                <p className="text-xs opacity-80">Disponível no</p>
                <p className="font-semibold">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
