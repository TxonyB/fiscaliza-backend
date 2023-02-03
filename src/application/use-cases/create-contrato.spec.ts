import { InMemoryContratosRepository } from 'test/repositories/in-memory-contratos-repository';
import { CreateContrato } from "./create-contrato";


describe('CreateContrato', () => {
  it ('should create a new contrato', async () => {
    const contratosRepository = new InMemoryContratosRepository();
    const createContrato = new CreateContrato(contratosRepository);

    const { contrato } = await createContrato.execute({
      id: '1',
      nome: 'Contrato 1',
      objeto: 'Objeto 1',
      dataInicio: new Date(),
      dataFim: new Date(),
      valor: 1000,
      numProcesso: '123',
      numContrato: '123',
      nomeEmpresa: 'Empresa 1',
      CNPJ: '123',
      createdAt: new Date(),
    });
    expect(contratosRepository.contratos).toHaveLength(1);
  });
});
