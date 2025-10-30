import { Injectable } from '@nestjs/common';
import { TextDto } from '../dto';

import { consonantLetters, finalSoftLetters } from './constants/cosntants';

@Injectable()
export class TranslateService {
  private async replace(str: string) {
    let res = str.replaceAll('Ае', 'Ӕ');
    res = res.replaceAll('ае', 'ӕ');

    res = res.replaceAll('Дж', 'Ԫ');
    res = res.replaceAll('дж', 'ԫ');

    res = res.replaceAll('Джмі', 'Ђмі');
    res = res.replaceAll('джмі', 'ђмі');

    res = res.replaceAll('Джі', 'Ђі');
    res = res.replaceAll('Джі', 'Ђі');

    res = res.replaceAll('Дзьо', 'Ԇӏ');
    res = res.replaceAll('дзьо', 'ԇӏ');

    res = res.replaceAll('Дзв', 'ꚃ');
    res = res.replaceAll('дзв', 'ꚃ');

    res = res.replaceAll('Дз', 'Ꚉ');
    res = res.replaceAll('дз', 'ꚉ');

    res = res.replaceAll('Оу', 'Ꙋ');
    res = res.replaceAll('оу', 'ꙋ');

    res = res.replaceAll('От', 'Ѿ');
    res = res.replaceAll('от', 'ѿ');

    res = res.replaceAll('Кс', 'Ѯ');
    res = res.replaceAll('кс', 'ѯ');

    res = res.replaceAll('Пс', 'Ѱ');
    res = res.replaceAll('пс', 'ѱ');

    res = res.replaceAll('Фт', 'Ѳ');
    res = res.replaceAll('фт', 'ѳ');

    res = res.replaceAll('Ан', 'Ѧ');
    res = res.replaceAll('ан', 'ѧ');

    res = res.replaceAll('Ян', 'Ѩ');
    res = res.replaceAll('ян', 'ѩ');

    res = res.replaceAll('Йон', 'Ѭ');
    res = res.replaceAll('йон', 'ѭ');

    res = res.replaceAll('Он', 'Ѫ');
    res = res.replaceAll('он', 'ѫ');

    res = res.replaceAll('Ен', 'Ꙙ');
    res = res.replaceAll('ен', 'ꙙ');

    res = res.replaceAll('Єн', 'Ꙝ');
    res = res.replaceAll('єн', 'ꙝ');

    res = res.replaceAll('Ін', 'Ꙛ');
    res = res.replaceAll('ін', 'ꙛ');

    res = res.replaceAll('Льо', 'Љӏ');
    res = res.replaceAll('льо', 'љӏ');

    res = res.replaceAll('Ньо', 'Њӏ');
    res = res.replaceAll('ньо', 'њӏ');

    res = res.replaceAll('Ль', 'Љ');
    res = res.replaceAll('ль', 'љ');

    res = res.replaceAll('Нь', 'Њ');
    res = res.replaceAll('нь', 'њ');

    res = res.replaceAll('нь', 'љ');
    res = res.replaceAll('нь', 'љ');

    res = res.replaceAll('Ст', 'Ѕ');
    res = res.replaceAll('ст', 'ѕ');

    res = res.replaceAll('Нг', 'Ҥ');
    res = res.replaceAll('нг', 'ҥ');

    res = res.replaceAll('Іа', 'Ꙗ');
    res = res.replaceAll('іа', 'ꙗ');

    res = res.replaceAll('Іє', 'Ѥ');
    res = res.replaceAll('іє', 'ѥ');

    res = res.replaceAll('Чч', 'Ꚇ');
    res = res.replaceAll('чч', 'ꚇ');

    res = res.replaceAll('Ів', 'Ѷв');
    res = res.replaceAll('ів', 'ѷв');

    res = res.replaceAll('Ії', 'Ꙓ');
    res = res.replaceAll('ії', 'ꙓ');

    res = res.replaceAll('Йо', 'Ё');
    res = res.replaceAll('йо', 'ё');

    res = res.replaceAll('Ом', 'Ѡм');
    res = res.replaceAll('ом', 'ѡм');

    res = res.replaceAll('Яє', 'Ԙ');
    res = res.replaceAll('яє', 'ԙ');

    res = res.replaceAll('Рх', 'Ԗ');
    res = res.replaceAll('рх', 'ԗ');

    res = res.replaceAll('Лх', 'Ԕ');
    res = res.replaceAll('лх', 'ԕ');

    res = res.replaceAll('Ер', 'Ър');
    res = res.replaceAll('ер', 'ър');

    res = res.replaceAll(/[бпвмф]е/giu, (match) => match[0] + 'ѣ');
    res = res.replaceAll(/[бпвмф]і/giu, (match) => match[0] + 'ꙇ');
    res = res.replaceAll(/[бпвмф]и/giu, (match) => match[0] + 'ꙑ');

    res = res.replaceAll('Ил', 'Ыл');
    res = res.replaceAll('ил', 'ыл');

    res = res.replaceAll('ьо', 'ӏ');

    res = res.replaceAll('Ді', 'Ԁі');
    res = res.replaceAll('ді', 'ԁі');

    res = res.replaceAll('Тьо', 'ፔӏ');
    res = res.replaceAll('тьо', 'ፔӏ');

    res = res.replaceAll('Ть', 'ፔ');
    res = res.replaceAll('ть', 'ፔ');

    res = res.replaceAll('Дьо', 'Ԁӏ');
    res = res.replaceAll('дьо', 'ԁӏ');

    res = res.replaceAll('Зьо', 'Зӏ');
    res = res.replaceAll('зьо', 'зӏ');

    res = res.replaceAll('Сьо', 'Сӏ');
    res = res.replaceAll('сьо', 'сӏ');

    res = res.replaceAll('Цьо', 'Ꙡӏ');
    res = res.replaceAll('цьо', 'ꙡӏ');

    res = res.replaceAll('Рьо', 'Рӏ');
    res = res.replaceAll('рьо', 'рӏ');

    res = res.replaceAll('Ин', 'Ꙟ');
    res = res.replaceAll('ин', 'ꙟ');

    res = res.replaceAll('Ува', 'Ўә ');
    res = res.replaceAll('ува', 'ўә');

    res = res.replaceAll('Шва', 'Ꚗә');
    res = res.replaceAll('шва', 'ꚗә');

    res = res.replaceAll('Цв', 'Ꚏә');
    res = res.replaceAll('цв', 'ꚏә');

    res = res.replaceAll('Шв', 'Ꚗ');
    res = res.replaceAll('шв', 'ꚗ');

    res = res.replaceAll('Цв', 'Ꚏ');
    res = res.replaceAll('цв', 'ꚏ');

    res = res.replaceAll('Ва', 'Вә');
    res = res.replaceAll('ва', 'вә');

    res = res.replaceAll('Ув', 'Ў');
    res = res.replaceAll('ув', 'ў');

    res = res.replaceAll('Чж', 'Џ');
    res = res.replaceAll('чж', 'џ');

    res = res.replaceAll('Чі', 'Ћі');
    res = res.replaceAll('чі', 'ћі');
    res = res.replaceAll('Чь', 'Ћь');
    res = res.replaceAll('чь', 'ћь');

    return res;
  }

  private async endOfWord(str: string): Promise<string> {
    const res = str
      .replaceAll(',', ' , ')
      .replaceAll('.', ' . ')
      .replaceAll('!', ' ! ')
      .replaceAll('?', ' ? ')
      .replaceAll(';', ' ; ')
      .replaceAll(':', ' : ')
      .replaceAll('-', ' - ');

    const words = res.split(' ');

    for (let i = 0; i < words.length; i++) {
      if (consonantLetters.includes(words[i][words[i].length - 1])) {
        words[i] = words[i].concat('ꙏ');
      } else if (
        // Check that finall letters a need to replace
        words[i].length >= 2 &&
        Object.keys(finalSoftLetters).includes(
          words[i][words[i].length - 2].concat(words[i][words[i].length - 1]),
        )
      ) {
        const wordArr = words[i].split('');

        wordArr.pop();
        const l = wordArr.pop();

        wordArr.push(finalSoftLetters[`${l}ь`]);

        words[i] = wordArr.join('');
      } else if (words[i][words[i].length - 1] === 'й') {
        const wordArr = words[i].split('');

        wordArr.pop();
        wordArr.push('ј');
        wordArr.push('ъ');

        words[i] = wordArr.join('');
      }
    }

    return words
      .join(' ')
      .replaceAll(' , ', ',')
      .replaceAll(' . ', '.')
      .replaceAll(' ! ', '!')
      .replaceAll(' ? ', '?')
      .replaceAll(' ; ', ';')
      .replaceAll(' : ', ':')
      .replaceAll(' - ', '-');
  }

  async translate(textDto: TextDto): Promise<TextDto> {
    const res = await this.replace(await this.endOfWord(textDto.text));
    return new TextDto(res);
  }
}
