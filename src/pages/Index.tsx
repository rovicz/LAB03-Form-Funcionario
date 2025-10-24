import { useState } from "react";
import { Funcionario } from "@/models/Funcionario";
import { EmployeeForm } from "@/components/EmployeeForm";
import { EmployeeTable } from "@/components/EmployeeTable";
import { EmployeeReports } from "@/components/EmployeeReports";
import { Users } from "lucide-react";

const Index = () => {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
  const [editandoFuncionario, setEditandoFuncionario] =
    useState<Funcionario | null>(null);

  const adicionarFuncionario = (novoFuncionario: Funcionario) => {
    setFuncionarios((prevFuncionarios) => [
      ...prevFuncionarios,
      novoFuncionario,
    ]);
  };

  const atualizarFuncionario = (funcionarioAtualizado: Funcionario) => {
    setFuncionarios((prevFuncionarios) =>
      prevFuncionarios.map((func) =>
        func.getId() === funcionarioAtualizado.getId()
          ? funcionarioAtualizado
          : func,
      ),
    );
    setEditandoFuncionario(null);
  };

  const excluirFuncionario = (id: string) => {
    setFuncionarios((prevFuncionarios) =>
      prevFuncionarios.filter((func) => func.getId() !== id),
    );
  };

  const editarFuncionario = (funcionario: Funcionario) => {
    setEditandoFuncionario(funcionario);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelarEdicao = () => {
    setEditandoFuncionario(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card shadow-[var(--shadow-card)]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-3xl font-bold color-white bg-clip-text">
                Sistema de Gestão de Funcionários
              </h1>
              <p className="text-muted-foreground">Startup de Tecnologia</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section>
          <EmployeeForm
            onAddEmployee={adicionarFuncionario}
            onUpdateEmployee={atualizarFuncionario}
            editingEmployee={editandoFuncionario}
            onCancelEdit={cancelarEdicao}
          />
        </section>

        <section>
          <EmployeeTable
            employees={funcionarios}
            onEditEmployee={editarFuncionario}
            onDeleteEmployee={excluirFuncionario}
          />
        </section>

        <section>
          <EmployeeReports employees={funcionarios} />
        </section>
      </main>

      <footer className="border-t border-border bg-card mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            Sistema desenvolvido com React, TypeScript e Tailwind CSS - Victor
            Fernandes Ferreira
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
