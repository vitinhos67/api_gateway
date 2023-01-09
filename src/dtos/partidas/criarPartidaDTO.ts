import { IsNotEmpty, IsObject, IsString } from 'class-validator';

export class CriarPartidaDTO {
  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsNotEmpty()
  @IsObject()
  resultado: Resultado;
}

export interface Resultado {
  set: string;
  ganhador: string;
}
