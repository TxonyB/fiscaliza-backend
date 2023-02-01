import { PrismaService } from "src/application/infra/database/prisma/prisma.service";
import { ContratosRepository } from "src/repositories/contratos-repository";
import { Contratos } from 'src/application/entities/contratos';

export class PrismaContratosRepository implements ContratosRepository {
  constructor(private prismaService: PrismaService){}

  async create(contrato: Contratos): Promise<void> {
    await this.prismaService.contratos.create({
      data: {
        //ids: contrato.ids,
        id: contrato.id,
        nome: contrato.nome.value,
        objeto: contrato.objeto,
        dataInicio: contrato.dataInicio,
        dataFim: contrato.dataFim,
        valor: contrato.valor,
        numProcesso: contrato.numProcesso,
        numContrato: contrato.numContrato,
        nomeEmpresa: contrato.nomeEmpresa,
        CNPJ: contrato.CNPJ,
        //createdAt: contrato.createdAt,
  }});

}
}