import { Funcionario } from "@/models/Funcionario";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Briefcase, Type } from "lucide-react";

interface EmployeeReportsProps {
  employees: Funcionario[];
}

export const EmployeeReports = ({ employees }: EmployeeReportsProps) => {
  const funcionariosAltoSalario = employees.filter(
    (func) => func.getSalario() > 5000,
  );

  const mediaSalarial =
    employees.length > 0
      ? employees.reduce((acc, func) => acc + func.getSalario(), 0) /
        employees.length
      : 0;

  const cargosUnicos = [...new Set(employees.map((func) => func.getCargo()))];

  const nomesMaiusculos = employees.map((func) => func.getNome().toUpperCase());

  const formatarSalario = (salario: number): string => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(salario);
  };

  if (employees.length === 0) {
    return (
      <Card className="shadow-[var(--shadow-card)]">
        <CardHeader>
          <CardTitle>Relatórios</CardTitle>
          <CardDescription>
            Cadastre funcionários para ver os relatórios
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Relatórios e Análises</h2>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Relatório 1: Salários > R$ 5000 */}
        <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">Altos Salários</CardTitle>
                <CardDescription>
                  Funcionários com salário &gt; R$ 5.000
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {funcionariosAltoSalario.length > 0 ? (
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground mb-3">
                  {funcionariosAltoSalario.length} funcionário
                  {funcionariosAltoSalario.length !== 1 ? "s" : ""}
                </p>
                {funcionariosAltoSalario.map((func) => (
                  <div
                    key={func.getId()}
                    className="flex justify-between items-center p-2 bg-muted/50 rounded-md"
                  >
                    <span className="font-medium">{func.getNome()}</span>
                    <Badge variant="default" className="bg-success">
                      {formatarSalario(func.getSalario())}
                    </Badge>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Nenhum funcionário nesta faixa salarial
              </p>
            )}
          </CardContent>
        </Card>

        {/* Relatório 2: Média Salarial */}
        <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Users className="h-5 w-5 text-accent" />
              </div>
              <div>
                <CardTitle className="text-lg">Média Salarial</CardTitle>
                <CardDescription>Salário médio da equipe</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-white">
                {formatarSalario(mediaSalarial)}
              </p>
              <p className="text-sm text-muted-foreground">
                Baseado em {employees.length} funcionário
                {employees.length !== 1 ? "s" : ""}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Relatório 3: Cargos Únicos */}
        <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">Cargos Únicos</CardTitle>
                <CardDescription>Diversidade de funções</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground mb-3">
                {cargosUnicos.length} cargo
                {cargosUnicos.length !== 1 ? "s" : ""} diferente
                {cargosUnicos.length !== 1 ? "s" : ""}
              </p>
              <div className="flex flex-wrap gap-2">
                {cargosUnicos.map((cargo, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="transition-[var(--transition-smooth)] hover:bg-primary hover:text-primary-foreground"
                  >
                    {cargo}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Relatório 4: Nomes em Maiúsculo */}
        <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Type className="h-5 w-5 text-accent" />
              </div>
              <div>
                <CardTitle className="text-lg">Lista de Nomes</CardTitle>
                <CardDescription>Nomes em maiúsculo</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-1 max-h-48 overflow-y-auto">
              {nomesMaiusculos.map((nome, index) => (
                <div
                  key={index}
                  className="p-2 bg-muted/30 rounded-md text-sm font-medium hover:bg-muted/50 transition-[var(--transition-smooth)]"
                >
                  {nome}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
