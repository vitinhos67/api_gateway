import * as dotenv from 'dotenv';
dotenv.config();

export const constants = {
  AMQP_CONNECTION_STRING_RABBIT: process.env.AMQP_CONNECTION_STRING_RABBIT,
  queue: process.env.queue,
  queue_desafios: process.env.queue_desafios,
  AWS_CONFIG: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
  Bucket: process.env.BUCKET,
  region: process.env.REGION,
};
