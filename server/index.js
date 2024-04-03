import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';

const PORT = 4820;
const app = express();

const corsOptions = {
    origin: 'http://localhost:4819',
};
const helmetOptions = {
    crossOriginResourcePolicy: false,
};

app.use(cors(corsOptions));
app.use(helmet(helmetOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    return res.send('Home page');
});

app.get('/api/calc', (req, res) => {
    return res.send(JSON.stringify({
        result: 123,
    }));
});

app.post('/api/calc', (req, res) => {
    const data = req.body;
    const {pirmas, antras} = data;
    const limit = 14;

    if (pirmas.length > limit) {
        return res.send(JSON.stringify({
            result: 'Pirmoji reiksme per didelis skaicius'
        }))
    }

    if (antras.length > limit) {
        return res.send(JSON.stringify({
            result: 'Antroji reiksme per didelis skaicius'
        }))
    }

    const first = pirmas.length === 0 ? 0 : +pirmas;
    const second = antras.length === 0 ? 0 : +antras;

    console.log(first, second)
    if (isNaN(first)) {
        return res.send(JSON.stringify({
            result: 'Pirmoji reiksme nera skaicius',
        }));
    }

    if (isNaN(second)) {
        return res.send(JSON.stringify({
            result: 'Antroji reiksme nera skaicius',
        }));
    }

    return res.send(JSON.stringify({
        result: first + second,
    }));
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});