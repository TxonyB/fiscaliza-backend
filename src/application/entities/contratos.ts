import { Replace } from "src/helpers/Replace";
import { Nome } from "./contente-contratos";

export interface ContratosProps {
  id: string;
  nome: Nome;
  objeto: string;
  dataInicio: Date;
  dataFim: Date;
  valor: number;
  numProcesso: string;
  numContrato: string;
  nomeEmpresa: string;
  CNPJ: string;
  createdAt: Date;
}

export class Contratos {
  //atributos e comportamentos
  private props: ContratosProps;

  constructor(props: Replace<ContratosProps, {createdAt?: Date}>) {
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
    };
  }

  public get id(): string {
    return this.props.id;
  }

  public set id(value: string) {
    this.props.id = value;
  }

  public get nome(): Nome {
    return this.props.nome;
  }

  public set nome(value: Nome) {
    this.props.nome = value;
  }

  public get objeto(): string {
    return this.props.objeto;
  }

  public set objeto(value: string) {
    this.props.objeto = value;
  }

  public get dataInicio(): Date {
    return this.props.dataInicio;
  }

  public set dataInicio(value: Date) {
    this.props.dataInicio = value;
  }

  public get dataFim(): Date {
    return this.props.dataFim;
  }

  public set dataFim(value: Date) {
    this.props.dataFim = value;
  }

  public get valor(): number {
    return this.props.valor;
  }

  public set valor(value: number) {
    this.props.valor = value;
  }

  public get numProcesso(): string {
    return this.props.numProcesso;
  }

  public set numProcesso(value: string) {
    this.props.numProcesso = value;
  }

  public get numContrato(): string {
    return this.props.numContrato;
  }

  public set numContrato(value: string) {
    this.props.numContrato = value;
  }

  public get nomeEmpresa(): string {
    return this.props.nomeEmpresa;
  }

  public set nomeEmpresa(value: string) {
    this.props.nomeEmpresa = value;
  }

  public get CNPJ(): string {
    return this.props.CNPJ;
  }

  public set CNPJ(value: string) {
    this.props.CNPJ = value;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }


}