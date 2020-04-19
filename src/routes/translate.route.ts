import { Router } from 'express';

const baseNumbers = {
  base: [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ],
  dozens: [
    'zero',
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
  ]
}

const translateRouter = Router();

translateRouter.get('/translate/:id', (req, res) => {
  const { id } = req.params;
  const number = Number(id);

  const typeNumber = Number.isInteger(number);

  if (!typeNumber) {
    return res.status(400).json({ error: 'Permitido somente numero inteiro' });
  };

  if (number < 0) {
    return res.status(400).json({ error: 'Não é permitido traduzir um numero menor que zero' });
  }

  if (number > 999) {
    return res.status(400).json({ error: 'Não é permitido traduzir um numero maior que 999' });
  }

  let word = '';

  if (number < 20) {
    word = baseNumbers.base[number];
  }

  if (number < 100) {
    const rest = number % 10;
    const base = baseNumbers.base[number % 10];
    const dozens = baseNumbers.dozens[Math.floor(number / 10)];

    if (rest) {
      word = `${dozens}-${base}`;
    } else {
      word = `${dozens}`;
    }
  }

  return res.status(200).json(word);
});

export default translateRouter;