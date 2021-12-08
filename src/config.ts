// import * as path from 'path';
import { Config } from './interface/config.interface';

export const config: Config = {
    inPutKeys: process.env.inPutKeys?.split(',')! || 'transactionId,err'.split(','),
};