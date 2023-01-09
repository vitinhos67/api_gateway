import { ArrayMinSize, IsOptional, IsString, IsArray } from 'class-validator';

export class CriarCategoriaDTO {
  @IsString()
  @IsOptional()
  descricao: string;

  @IsArray()
  @ArrayMinSize(1)
  eventos: Array<Eventos>;
}

export interface Eventos {
  nome: string;
  operacao: string;
  value: string;
}
