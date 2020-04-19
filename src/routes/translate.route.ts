import { Router } from 'express';

const numberBase = [
  { number: 0, word: 'zero' },
  { number: 1, word: 'one' },
  { number: 2, word: 'two' },
  { number: 3, word: 'thre' },
]

const translateRouter = Router();

translateRouter.get('/translate/:id', (req, res) => {
  const { id } = req.params;
  const number = Number(id);

  const typeNumber = Number.isInteger(number);

  if (!typeNumber) {
    return res.status(400).json('Permitido somente numero inteiro');
  }

  const numberTranslated = numberBase.find(item => item.number === number);

  return res.status(200).json(numberTranslated?.word);
});

export default translateRouter;