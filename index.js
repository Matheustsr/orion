import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://db:27017/orion', { useMongoCluente: true });
// Compass : mongodb://localhost:27017/auth?readPreference=primary&appname=MongoDB%20Compass&ssl=false

routes(app);

app.listen(3004, () => {
    console.log('Its on, baby!');
});
