// Description: Classe que representa o conteúdo de um contrato, podendo usar validações no seu conteudo

export class Nome {
  private readonly nome: string;

  get value(): string {
    return this.nome;
  }
  
  validateNomeLength(nome: string): boolean {
    return this.nome.length > 0;
  }

  constructor(nome: string) {
    const isValid = this.validateNomeLength(nome);

    if (!isValid) {
      throw new Error('Nome inválido');
    }

    this.nome = nome;
  }
}