import express from 'express';
import cors from 'cors';

const PORT = 4820;
const app = express();

const corsOptions = {
    origin: 'http://localhost:4819',
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    return res.send('Home page');
});

app.get('/api/calc', (req, res) => {
    return res.send(JSON.stringify({
        result: 123,
    }));
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});