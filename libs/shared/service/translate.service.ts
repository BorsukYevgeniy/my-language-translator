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

    res = res.replaceAll('Дзьо', 'Ԇӏ');
    res = res.replaceAll('дзьо', 'ԇӏ');

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

    res = res.replaceAll('Кі', 'Ќі');
    res = res.replaceAll('кі', 'ќі');

    res = res.replaceAll('Гі', 'Ѓі');
    res = res.replaceAll('Гі', 'ѓі');

    res = res.replaceAll('Зі', 'З́і');
    res = res.replaceAll('зі', 'з́і');
    res = res.replaceAll('Зь', 'З́ь');
    res = res.replaceAll('зь', 'з́ь');

    res = res.replaceAll('Сі', 'С́і');
    res = res.replaceAll('сі', 'с́і');
    res = res.replaceAll('Сь', 'С́ь');
    res = res.replaceAll('сь', 'с́ь');

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

    res = res.replaceAll('Йо', 'Ј');
    res = res.replaceAll('йо', 'ј');

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

    res = res.replaceAll('Дьо', 'Дӏ');
    res = res.replaceAll('дьо', 'дӏ');

    res = res.replaceAll('Зьо', 'Зӏ');
    res = res.replaceAll('зьо', 'зӏ');

    res = res.replaceAll('Сьо', 'Сӏ');
    res = res.replaceAll('сьо', 'сӏ');

    res = res.replaceAll('Цьо', 'Ꙡӏ');
    res = res.replaceAll('цьо', 'ꙡӏ');

    res = res.replaceAll('Рьо', 'Рӏ');
    res = res.replaceAll('рьо', 'рӏ');

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
        words[i] = words[i].concat('ъ');
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
