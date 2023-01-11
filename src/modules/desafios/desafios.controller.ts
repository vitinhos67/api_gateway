import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CONNECTION_DESAFIOS } from 'src/config/connection.rabbitmq.amqp';
import { CriarCategoriaDTO } from 'src/dtos/categoria/criar-categoria.dto';

@Controller('api/v1/desafios')
export class DesafiosController {
  private adminBackEnd: ClientProxy;
  constructor() {
    this.adminBackEnd = CONNECTION_DESAFIOS;
  }

  @Get()
  async TodosDesafios() {
    return this.adminBackEnd.send('todos-desafios', '');
  }

  @Post()
  async criarDesafio(@Body() criarDesafioDTO: CriarCategoriaDTO) {
    return this.adminBackEnd.send('criar-desafio', criarDesafioDTO);
  }

  @Get('/meus-desafios/:id')
  async consultarMeusDesafios(@Param('id') id: string) {
    return this.adminBackEnd.send('consultar-meus-desafios', id);
  }

  @Put('/atualizar-status/:id')
  async atualizarStatusDesafio(
    @Body('status') status: string,
    @Param('id') id: string,
  ) {
    console.log(status, id);

    return this.adminBackEnd.send('atualizar-status-desafio', [status, id]);
  }
}
