import express from 'express'
import routes from './routes';

const app = express()

app.use(express.json());
app.use(routes);

const port = 3333;
app.listen(port, err => {
	if (err) {
		return console.error(err);
	}
	return console.log(`Salesfy Challenge Backend is listening on ${port}`)
})

export default app;