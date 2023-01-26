export interface ContratosProps {
  id: number;
  nome: string;
  descricao: string;
  dataInicio: Date;
  dataFim: Date;
  valor: number;
  status: string;
  idEmpresa: number;
  idTipoContrato: number;
  idTipoPagamento: number;
  idTipoReajuste: number;
  idTipoReajusteValor: number;
}

export class Contratos {
  //atributos e comportamentos
  private props: ContratosProps;

  constructor(props: ContratosProps) {
    this.props = props;
  }
}