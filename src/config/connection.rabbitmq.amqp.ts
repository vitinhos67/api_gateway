import { ClientProxyFactory } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices';
import { constants } from './constants';

export const CONNECTION_RABBITMQ = ClientProxyFactory.create({
  transport: Transport.RMQ,
  options: {
    urls: [constants.AMQP_CONNECTION_STRING_RABBIT],
    queue: constants.queue,
  },
});
