import { Injectable } from '@nestjs/common';
import { constants } from 'src/config/constants';
import { s3 } from 'src/config/connection.aws-s3.config';

@Injectable()
export class AwsService {
  async uploadArquivo(file: any, id: string) {
    const extensaoArquivo = file.originalname.split('.')[1];
    const nomeArquivo = `${id}1.${extensaoArquivo}`;

    const params = {
      Bucket: constants.Bucket,
      Key: nomeArquivo,
      Body: file.buffer,
    };

    const data = await s3.putObject(params).promise();

    const url = `https://${constants.Bucket}.s3.${constants.region}.amazonaws.com/${nomeArquivo}`;

    return {
      url,
      data,
    };
  }
}
