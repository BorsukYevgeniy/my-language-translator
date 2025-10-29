import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { TextDto } from '../dto/text.dto';

@Injectable()
export class ParseTextPipe implements PipeTransform<TextDto, TextDto> {
  transform(value: TextDto, metadata: ArgumentMetadata) {
    return new TextDto(value.text.replaceAll('\n', ' ').trim());
  }
}
