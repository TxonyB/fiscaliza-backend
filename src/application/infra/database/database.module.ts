import { Module } from '@nestjs/common';
import { ContratosRepository } from 'src/repositories/contratos-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaContratosRepository } from './prisma/repositories/prisma-contratos-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: ContratosRepository,
      useClass: PrismaContratosRepository,
    }
  ],
  exports: [ContratosRepository],
})

export class DatabaseModule {}
