import express from 'express';

const app = express();
const port = process.env.PORT || 3333;

app.get('/', (request, response) => {
	return response.send('Hello World!');
});

app.listen(port, () => {
	console.log(`App ouvindo a porta ${port}`);
});
