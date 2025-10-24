import { Funcionario } from "@/models/Funcionario";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface EmployeeTableProps {
  employees: Funcionario[];
  onEditEmployee: (employee: Funcionario) => void;
  onDeleteEmployee: (id: string) => void;
}

export const EmployeeTable = ({
  employees,
  onEditEmployee,
  onDeleteEmployee,
}: EmployeeTableProps) => {
  const formatarSalario = (salario: number): string => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(salario);
  };

  const handleDelete = (id: string, nome: string) => {
    if (window.confirm(`Deseja realmente excluir o funcionário ${nome}?`)) {
      onDeleteEmployee(id);
      toast.success("Funcionário excluído com sucesso!");
    }
  };

  if (employees.length === 0) {
    return (
      <Card className="shadow-[var(--shadow-card)]">
        <CardHeader>
          <CardTitle>Lista de Funcionários</CardTitle>
          <CardDescription>Nenhum funcionário cadastrado ainda</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center py-12">
          <p className="text-muted-foreground">
            Cadastre seu primeiro funcionário usando o formulário acima
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
      <CardHeader>
        <CardTitle className="text-whiet">Lista de Funcionários</CardTitle>
        <CardDescription>
          Total de {employees.length} funcionário
          {employees.length !== 1 ? "s" : ""} cadastrado
          {employees.length !== 1 ? "s" : ""}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold">Nome</TableHead>
                <TableHead className="font-semibold">Idade</TableHead>
                <TableHead className="font-semibold">Cargo</TableHead>
                <TableHead className="font-semibold">Salário</TableHead>
                <TableHead className="text-right font-semibold">
                  Ações
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((funcionario) => (
                <TableRow
                  key={funcionario.getId()}
                  className="hover:bg-muted/30 transition-[var(--transition-smooth)]"
                >
                  <TableCell className="font-medium">
                    {funcionario.getNome()}
                  </TableCell>
                  <TableCell>{funcionario.getIdade()} anos</TableCell>
                  <TableCell>{funcionario.getCargo()}</TableCell>
                  <TableCell className="font-semibold text-white">
                    {formatarSalario(funcionario.getSalario())}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onEditEmployee(funcionario)}
                        className="hover:bg-primary hover:text-primary-foreground transition-[var(--transition-smooth)]"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          handleDelete(
                            funcionario.getId(),
                            funcionario.getNome(),
                          )
                        }
                        className="hover:bg-destructive hover:text-destructive-foreground transition-[var(--transition-smooth)]"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
