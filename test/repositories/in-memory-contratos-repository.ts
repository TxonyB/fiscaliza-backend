import { Contratos } from "src/application/entities/contratos";
import { ContratosRepository } from "src/repositories/contratos-repository";

export class InMemoryContratosRepository implements ContratosRepository {

  public contratos: Contratos[] = [];
  
  async create(contrato: Contratos) {
    this.contratos.push(contrato);
  }
};




