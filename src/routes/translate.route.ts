import { Router } from 'express';

const translateRouter = Router();

const numberBase = [
  { number: 0, word: 'zero' },
  { number: 1, word: 'one' },
  { number: 2, word: 'two' },
  { number: 3, word: 'thre' },
]

translateRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  const number = Number(id);

  const numberTranslated = numberBase.find(item => item.number === number);

  res.json(numberTranslated?.word);
});

export default translateRouter;