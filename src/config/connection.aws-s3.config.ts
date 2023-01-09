import * as AWS from 'aws-sdk';
import { constants } from './constants';

export const s3 = new AWS.S3(constants.AWS_CONFIG);
