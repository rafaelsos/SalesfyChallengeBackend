const baseNumbers = {
  base: [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
    'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
    'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ],
  dozens: [
    'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
    'eighty', 'ninety'
  ]
}

class TranslateRepository {
  public translatedNumber(number: number) {
    let word = '';

    if (number < 20) {
      word = baseNumbers.base[number];

    } else if (number < 100) {
      const rest = number % 10;
      const base = baseNumbers.base[number % 10];
      const dozens = baseNumbers.dozens[Math.floor(number / 10)];

      if (rest) {
        word = `${dozens}-${base}`;
      } else {
        word = `${dozens}`;
      }
    } else if (number < 1000) {
      const rest = number % 100;
      const numHundred = this.translatedNumber(Math.floor(number / 100)) + ' hundred';

      if (rest) {
        const numTen = this.translatedNumber(rest);
        word = numHundred + ' ' + numTen;
      } else {
        word = numHundred;
      }
    } else if (number < 1000000) {
      const rest = number % 1000;
      const numThousand = this.translatedNumber(Math.floor(number / 1000)) + ' thousand';

      if (rest) {

        if (Math.floor(rest / 100)) {
          const numHundred = this.translatedNumber(Math.floor(rest / 100)) + ' hundred';
          const restHundred = number % 100;

          if (restHundred) {
            const numTen = this.translatedNumber(restHundred);
            word = numThousand + ' ' + numHundred + ' ' + numTen;
          } else {
            word = numThousand + ' ' + numHundred;
          }
        } else {
          const restHundred = number % 100;

          if (restHundred) {
            const numTen = this.translatedNumber(restHundred);
            word = numThousand + ' ' + numTen;
          } else {
            word = numThousand;
          }
        }
      } else {
        word = numThousand;
      }
    } else if (number < 1000000000) {
      const rest = number % 1000000; //MILLION
      const numMillion = this.translatedNumber(Math.floor(number / 1000000)) + ' million';

      if (rest) {
        if (Math.floor(rest / 1000)) {
          const numThousand = this.translatedNumber(Math.floor(rest / 1000)) + ' thousand';
          const restThousand = number % 1000;

          if (restThousand) {
            if (Math.floor(restThousand / 100)) {
              const numHundred = this.translatedNumber(Math.floor(restThousand / 100)) + ' hundred';
              const restHundred = number % 100;

              if (restHundred) {
                const numTen = this.translatedNumber(restHundred);
                word = numMillion + ' ' + numThousand + ' ' + numHundred + ' ' + numTen;
              } else {
                word = numMillion + ' ' + numThousand + ' ' + numHundred;
              }
            } else {
              const restHundred = number % 100;

              if (restHundred) {
                const numTen = this.translatedNumber(restHundred);
                word = numMillion + ' ' + numThousand + ' ' + numTen;
              } else {
                word = numMillion + ' ' + numThousand;
              }
            }
          } else {
            word = numMillion + ' ' + numThousand;
          }
        }
      } else {
        word = numMillion;
      }
    }

    return word;
  }
}

export default TranslateRepository;