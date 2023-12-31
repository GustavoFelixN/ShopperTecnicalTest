import express from 'express';
import validationRoutes from './routes/validationRoutes';
import updateRoutes from './routes/updateRoutes';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());

app.get('/validate', validationRoutes);
app.put('/update', updateRoutes);

app.get('/', (request, response) => response.send('sucesso'));

app.listen(port, () => {
	console.log(`App ouvindo a porta ${port}`);
});
