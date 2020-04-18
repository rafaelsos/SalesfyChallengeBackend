import { Router } from 'express';

const numberBase = [
  { number: 0, word: 'zero' },
  { number: 1, word: 'one' },
  { number: 2, word: 'two' },
  { number: 3, word: 'thre' },
]

const translateRouter = Router();

translateRouter.get('/', (req, res) => {
  const { id } = req.params;
  const number = Number(id);

  const numberTranslated = numberBase.find(item => item.number === number);

  return res.json(numberTranslated?.word);
});

export default translateRouter;