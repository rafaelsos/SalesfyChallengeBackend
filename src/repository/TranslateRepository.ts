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

  public validationNumberReq(number: number) {
    let response = '';

    const typeNumber = Number.isInteger(number);
    if (!typeNumber) {
      response = 'Permitido somente numero inteiro';
    };

    if (number < 0) {
      response = 'Não é permitido traduzir um numero menor que zero';
    }

    if (number > 9999) {
      response = 'Não é permitido traduzir um numero maior que 999';
    }

    return response;
  }

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
    }

    return word;
  }
}

export default TranslateRepository;