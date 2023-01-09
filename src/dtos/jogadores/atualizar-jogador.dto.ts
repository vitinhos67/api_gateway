import { IsEmail, IsNotEmpty } from 'class-validator';

export class AtualizarJogadorDTO {
  @IsNotEmpty()
  readonly telefoneCelular?: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email?: string;
}
