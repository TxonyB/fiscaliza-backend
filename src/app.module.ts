import { Module } from '@nestjs/common';
import { AppController } from './application/infra/app.controller';
import { PrismaService } from './application/infra/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
