import { CreateContratosBody } from './create-contratos-body';
import { PrismaService } from './prisma.service';
// controller: define a rota e o método que será executado quando a rota for acessada
import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';

@Controller('contratos')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.contratos.findMany();
  }

  @Post()
  async create(@Body() body: CreateContratosBody) {
    const { nome, objeto, valor, dataInicio, dataFim, nomeEmpresa, CNPJ, numProcesso, numContrato } = body;

    await this.prisma.contratos.create({
      data: {
        id: randomUUID(),
        nome,
        objeto,
        valor,
        dataInicio,
        dataFim,
        nomeEmpresa,
        CNPJ,
        numProcesso,
        numContrato,
      },
    });
  }
}
