import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { FileInterceptor } from '@nestjs/platform-express';
import { CONNECTION_MICROADMIN } from 'src/config/connection.rabbitmq.amqp';
import { AtualizarJogadorDTO } from 'src/dtos/jogadores/atualizar-jogador.dto';
import { CriarJogadorDTO } from 'src/dtos/jogadores/criarJogador.dto';
import { Express } from 'express';
import { AwsService } from '../aws/aws.service';
@Controller('api/v1/jogadores')
export class JogadoresController {
  private logger = new Logger(JogadoresController.name);
  private clientAdminBackEnd: ClientProxy;

  constructor(private readonly awsService: AwsService) {
    this.clientAdminBackEnd = CONNECTION_MICROADMIN;
  }

  @Get()
  async consultarTodosJogadores() {
    return this.clientAdminBackEnd.send('consultar-todos-jogadores', '');
  }
  @Get(':id')
  async consultarJogador(@Param('id') id: string) {
    return this.clientAdminBackEnd.send('consultar-jogador', { id });
  }

  @Post()
  async criarJogador(@Body() criarJogadorDTO: CriarJogadorDTO) {
    return this.clientAdminBackEnd.send('criar-jogador', criarJogadorDTO);
  }
  @Post('/upload/:id')
  @UseInterceptors(FileInterceptor('file'))
  async uploadPerfil(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
  ) {
    return await this.awsService.uploadArquivo(file, id);
  }

  @Put()
  async atualizarJogador(
    @Body() atualizarJogador: AtualizarJogadorDTO,
    @Query('id') id: string,
  ) {
    return this.clientAdminBackEnd.send('atualizar-jogador', {
      id,
      atualizarJogador,
    });
  }
}
