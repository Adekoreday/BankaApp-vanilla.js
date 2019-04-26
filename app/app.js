import { config } from 'dotenv';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import Router from './routes/router';

config();

const app = express();

;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use('/upload', express.static(path.join(__dirname, './../uploads')));
app.use('/api/v1', Router);
const port = process.env.PORT || 3000;
app.listen(port, () => { });

export default app;