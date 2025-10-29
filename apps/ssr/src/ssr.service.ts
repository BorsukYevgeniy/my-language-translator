import { Injectable } from '@nestjs/common';

@Injectable()
export class SsrService {
  getHello(): string {
    return 'Hello World!';
  }
}
