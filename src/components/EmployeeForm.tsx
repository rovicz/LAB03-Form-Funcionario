import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Funcionario } from "@/models/Funcionario";
import { toast } from "sonner";

interface EmployeeFormProps {
  onAddEmployee: (employee: Funcionario) => void;
  onUpdateEmployee: (employee: Funcionario) => void;
  editingEmployee: Funcionario | null;
  onCancelEdit: () => void;
}

export const EmployeeForm = ({
  onAddEmployee,
  onUpdateEmployee,
  editingEmployee,
  onCancelEdit,
}: EmployeeFormProps) => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [cargo, setCargo] = useState("");
  const [salario, setSalario] = useState("");

  useEffect(() => {
    if (editingEmployee) {
      setNome(editingEmployee.getNome());
      setIdade(editingEmployee.getIdade().toString());
      setCargo(editingEmployee.getCargo());
      setSalario(editingEmployee.getSalario().toString());
    }
  }, [editingEmployee]);

  const validarFormulario = (): boolean => {
    if (!nome.trim()) {
      toast.error("Por favor, preencha o nome");
      return false;
    }
    if (!idade || parseInt(idade) <= 0 || parseInt(idade) > 120) {
      toast.error("Por favor, informe uma idade válida");
      return false;
    }
    if (!cargo.trim()) {
      toast.error("Por favor, preencha o cargo");
      return false;
    }
    if (!salario || parseFloat(salario) <= 0) {
      toast.error("Por favor, informe um salário válido");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validarFormulario()) return;

    if (editingEmployee) {
      editingEmployee.atualizar(
        nome,
        parseInt(idade),
        cargo,
        parseFloat(salario),
      );
      onUpdateEmployee(editingEmployee);
      toast.success("Funcionário atualizado com sucesso!");
    } else {
      const novoFuncionario = new Funcionario(
        nome,
        parseInt(idade),
        cargo,
        parseFloat(salario),
      );
      onAddEmployee(novoFuncionario);
      toast.success("Funcionário cadastrado com sucesso!");
    }

    limparFormulario();
  };

  const limparFormulario = () => {
    setNome("");
    setIdade("");
    setCargo("");
    setSalario("");
    onCancelEdit();
  };

  return (
    <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
      <CardHeader>
        <CardTitle className="color-white">
          {editingEmployee ? "Editar Funcionário" : "Cadastrar Funcionário"}
        </CardTitle>
        <CardDescription>
          {editingEmployee
            ? "Atualize as informações do funcionário"
            : "Preencha os dados para adicionar um novo funcionário"}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="nome">Nome</Label>
          <Input
            id="nome"
            type="text"
            placeholder="Digite o nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="transition-[var(--transition-smooth)] focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="idade">Idade</Label>
          <Input
            id="idade"
            type="number"
            placeholder="Digite a idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            min="1"
            max="120"
            className="transition-[var(--transition-smooth)] focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="cargo">Cargo</Label>
          <Input
            id="cargo"
            type="text"
            placeholder="Ex: Desenvolvedor Full Stack"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
            className="transition-[var(--transition-smooth)] focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="salario">Salário (R$)</Label>
          <Input
            id="salario"
            type="number"
            placeholder="Digite o salário"
            value={salario}
            onChange={(e) => setSalario(e.target.value)}
            min="0"
            step="0.01"
            className="transition-[var(--transition-smooth)] focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex gap-2 pt-2">
          <Button
            onClick={handleSubmit}
            className="flex-1 bg-white text-black hover:bg-black hover:text-white transition-[var(--transition-smooth)]"
          >
            {editingEmployee ? "Atualizar" : "Cadastrar"}
          </Button>
          {editingEmployee && (
            <Button
              onClick={limparFormulario}
              variant="outline"
              className="bg-white"
            >
              Cancelar
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
