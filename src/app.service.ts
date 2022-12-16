// service: define a lógica que será executada quando a rota for acessada, ou seja, o que será feito quando a rota for acessada, conexão com banco de dados, etc.

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
