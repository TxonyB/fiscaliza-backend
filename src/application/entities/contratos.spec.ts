import { Nome } from './contente-contratos';
import { Contratos } from './contratos';


describe ('Contratos' , () => {

it ('should be able to create a contratos', () => {
  const contratos = new Contratos({
    id: '123',
    nome: new Nome('O contrato tem um nome'),
    objeto: 'O contrato tem um objeto',
    dataInicio: new Date(),
    dataFim: new Date(),
    valor: 1000,
    numProcesso: '123',
    numContrato: '123',
    nomeEmpresa: 'empresa',
    CNPJ: '123',
  });

  expect(contratos).toBeTruthy();
  
});
});


 