interface CreateContratoRequest {
  id: string;
  nome: string;
  objeto: string;
  dataInicio: Date;
  dataFim: Date;
  valor: number;
  numProcesso: string;
  numContrato: string;
  nomeEmpresa: string;
  CNPJ: string;
}


class CreateContrato {

  async execute (request: CreateContratoRequest): Promise<Contrato> {
    const contrato = new Contratos(request);
    const contratoCreated = await this.create(contrato);
    return contratoCreated;
  }
  
}