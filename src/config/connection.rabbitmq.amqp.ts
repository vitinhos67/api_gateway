import { ClientProxyFactory } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices';
import { constants } from './constants';

export const CONNECTION_MICROADMIN = ClientProxyFactory.create({
  transport: Transport.RMQ,
  options: {
    urls: [constants.AMQP_CONNECTION_STRING_RABBIT],
    queue: constants.queue,
  },
});

export const CONNECTION_DESAFIOS = ClientProxyFactory.create({
  transport: Transport.RMQ,
  options: {
    urls: [constants.AMQP_CONNECTION_STRING_RABBIT],
    queue: constants.queue_desafios,
  },
});
