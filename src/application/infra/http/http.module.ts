import { Module } from "@nestjs/common";
import { CreateContrato } from "src/application/use-cases/create-contrato";
import { DatabaseModule } from "../database/database.module";
import { ContratosController } from "./controllers/contratos.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [
    ContratosController
  ],
  providers: [
    CreateContrato
  ],
})
export class HttpModule {}