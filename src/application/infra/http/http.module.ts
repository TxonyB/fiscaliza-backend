import { Module } from "@nestjs/common";
import { ContratosController } from "./controllers/contratos.controller";

@Module({
  imports: [],
  controllers: [
    ContratosController
  ],
})
export class HttpModule {}