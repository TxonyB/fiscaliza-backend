import { Contratos } from "src/application/entities/contratos";

export abstract class ContratosRepository {
  abstract create(contrato: Contratos): Promise<void>;
}