import { config } from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import Router from './routes/Router';

config();

const app = express();
app.use(bodyParser.json());

app.use('/api/v1', Router);
const port = process.env.PORT || 3000;
app.listen(port, () => { });

export default app;