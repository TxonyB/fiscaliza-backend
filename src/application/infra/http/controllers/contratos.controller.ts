import { CreateContrato } from './../../../use-cases/create-contrato';
import { CreateContratosBody } from '../dtos/create-contratos-body';
// controller: define a rota e o método que será executado quando a rota for acessada
import { Body, Controller, Post } from '@nestjs/common';

@Controller('contratos')
export class ContratosController {
  constructor(
    private createContrato : CreateContrato
  ) {}
  @Post()
  async create(@Body() body: CreateContratosBody) {
    const { id, nome, objeto, valor, dataInicio, dataFim, nomeEmpresa, CNPJ, numProcesso, numContrato, createdAt } = body;

    const {contrato} = await this.createContrato.execute({
      id,
      nome,
      objeto,
      valor,
      dataInicio,
      dataFim,
      nomeEmpresa,
      CNPJ,
      numProcesso,
      numContrato,
      createdAt,
    });

    return {contrato};
  }
}
