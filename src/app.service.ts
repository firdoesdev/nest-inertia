import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getLogin(): string {
    return 'Login test.';
  }
  getHello(): string {
    return 'Hello World!';
  }
}
