import { IsString } from 'class-validator';

export class TextDto {
  constructor(text: string) {
    this.text = text;
  }

  @IsString()
  text: string;
}
