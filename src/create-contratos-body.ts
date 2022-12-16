//Para validar as classes, instalar o pacote class-validator e class-transformer
import { IsNotEmpty } from 'class-validator'; // @IsNotEmpty() significa que o campo não pode ser vazio

export class CreateContratosBody {
  @IsNotEmpty()
  nome: string;
  @IsNotEmpty() 
  objeto: number;
  @IsNotEmpty()
  valor: number;
  @IsNotEmpty()
  dataInicio: Date;
  @IsNotEmpty()
  dataFim: Date;
  @IsNotEmpty()
  nomeEmpresa: string;
  @IsNotEmpty()
  CNPJ: string;
  @IsNotEmpty()
  numProcesso: string;
  @IsNotEmpty()
  numContrato: string;
}