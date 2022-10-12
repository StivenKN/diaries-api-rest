import express from 'express';
import router from './routes/diaries';

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/ping', (_request, res) => {
	console.log('Someone pinged here!!');
	res.send('pong');
});

app.use('/api/diaries', router);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
