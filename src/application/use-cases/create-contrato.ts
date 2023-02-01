import { ContratosRepository } from "src/repositories/contratos-repository";
import { Nome } from "../entities/contente-contratos";
import { Contratos } from "../entities/contratos";

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

interface CreateContratoResponse {
  contrato: Contratos;
}
export class CreateContrato {

  constructor(
    private contratosRepository: ContratosRepository,

  ) {}

  async execute (
    request: CreateContratoRequest,): Promise<CreateContratoResponse> {
    const { id, nome, objeto, dataInicio, dataFim, valor, numProcesso, numContrato, nomeEmpresa, CNPJ } = request;

    const contrato = new Contratos({id, nome: new Nome(nome), objeto, dataInicio, dataFim, valor, numProcesso, numContrato, nomeEmpresa, CNPJ});

    await this.contratosRepository.create(contrato);
    return {
      contrato,
    };
    
  }
}
