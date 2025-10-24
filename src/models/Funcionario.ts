/**
 * Classe Funcionario
 * Representa um funcionário da startup com seus atributos e métodos
 */
export class Funcionario {
  private id: string;
  private nome: string;
  private idade: number;
  private cargo: string;
  private salario: number;

  constructor(nome: string, idade: number, cargo: string, salario: number, id?: string) {
    this.id = id || this.gerarId();
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
    this.salario = salario;
  }

  // Métodos de acesso (Getters)
  getId(): string {
    return this.id;
  }

  getNome(): string {
    return this.nome;
  }

  getIdade(): number {
    return this.idade;
  }

  getCargo(): string {
    return this.cargo;
  }

  getSalario(): number {
    return this.salario;
  }

  // Métodos de modificação (Setters)
  setNome(nome: string): void {
    this.nome = nome;
  }

  setIdade(idade: number): void {
    this.idade = idade;
  }

  setCargo(cargo: string): void {
    this.cargo = cargo;
  }

  setSalario(salario: number): void {
    this.salario = salario;
  }

  // Método toString()
  toString(): string {
    return `Funcionário: ${this.nome}, ${this.idade} anos, ${this.cargo}, R$ ${this.salario.toFixed(2)}`;
  }

  // Método privado para gerar ID único
  private gerarId(): string {
    return `func_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Método para atualizar todos os dados
  atualizar(nome: string, idade: number, cargo: string, salario: number): void {
    this.setNome(nome);
    this.setIdade(idade);
    this.setCargo(cargo);
    this.setSalario(salario);
  }
}
