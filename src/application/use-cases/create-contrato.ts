import { Injectable } from "@nestjs/common";
import { ContratosRepository } from "src/repositories/contratos-repository";
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
  createdAt: Date;
}

interface CreateContratoResponse {
  contrato: Contratos;
}

@Injectable()
export class CreateContrato {

  constructor(
    private contratosRepository: ContratosRepository,

  ) {}

  async execute (
    request: CreateContratoRequest,): Promise<CreateContratoResponse> {
    const { id, nome, objeto, dataInicio, dataFim, valor, numProcesso, numContrato, nomeEmpresa, CNPJ, createdAt } = request;

    const contrato = new Contratos({id, nome, objeto, dataInicio, dataFim, valor, numProcesso, numContrato, nomeEmpresa, CNPJ, createdAt: new Date()});

    await this.contratosRepository.create(contrato);
    return {
      contrato,
    };
    
  }
}
