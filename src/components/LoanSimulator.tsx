import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Calculator, ArrowRight } from "lucide-react";

export function LoanSimulator() {
  const [loanAmount, setLoanAmount] = useState([50000]);
  const [loanTerm, setLoanTerm] = useState([24]);
  
  const interestRate = 0.019; // 1.9% ao mês
  const monthlyPayment = (loanAmount[0] * (interestRate * Math.pow(1 + interestRate, loanTerm[0]))) / (Math.pow(1 + interestRate, loanTerm[0]) - 1);
  const totalAmount = monthlyPayment * loanTerm[0];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <section id="emprestimos" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Calculator className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Simulador de Empréstimo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Simule seu empréstimo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra quanto você pode pegar emprestado e qual será sua parcela mensal
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-3xl shadow-card p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Sliders */}
              <div className="space-y-10">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-medium text-foreground">
                      Valor do empréstimo
                    </label>
                    <span className="text-2xl font-bold text-primary">
                      {formatCurrency(loanAmount[0])}
                    </span>
                  </div>
                  <Slider
                    value={loanAmount}
                    onValueChange={setLoanAmount}
                    min={1000}
                    max={200000}
                    step={1000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>R$ 1.000</span>
                    <span>R$ 200.000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-medium text-foreground">
                      Prazo em meses
                    </label>
                    <span className="text-2xl font-bold text-primary">
                      {loanTerm[0]} meses
                    </span>
                  </div>
                  <Slider
                    value={loanTerm}
                    onValueChange={setLoanTerm}
                    min={6}
                    max={60}
                    step={6}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>6 meses</span>
                    <span>60 meses</span>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="bg-hero-gradient rounded-2xl p-8 text-primary-foreground">
                <h3 className="text-lg font-medium mb-6 opacity-90">
                  Resultado da simulação
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-sm opacity-80 mb-1">Parcela mensal</p>
                    <p className="text-4xl font-bold">{formatCurrency(monthlyPayment)}</p>
                  </div>
                  
                  <div className="h-px bg-primary-foreground/20" />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm opacity-80 mb-1">Total a pagar</p>
                      <p className="text-xl font-semibold">{formatCurrency(totalAmount)}</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-80 mb-1">Taxa de juros</p>
                      <p className="text-xl font-semibold">1,9% a.m.</p>
                    </div>
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full gap-2 mt-4">
                    Solicitar empréstimo
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
