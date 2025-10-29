import { Injectable } from '@nestjs/common';
import { TextDto } from '../dto';

@Injectable()
export class TranslateService {
  async translate(text: TextDto): Promise<TextDto> {
    return text;
  }
}
