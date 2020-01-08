import { config } from 'dotenv';
import '@babel/polyfill';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import swaggerDocument from '../swagger.json';
import Router from './routes/router';

const options = {
  customCss: '.swagger-ui .topbar { display: none }'
};
config();
const app = express();
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.use('/upload', express.static(path.join(__dirname, './../uploads')));
app.use('/api/v1', Router);
app.get('/', (req, res)=> res.send(`welcome to banka app by Adeyemi Adekorede @Andela`));
app.use('*', (req, res)=> res.send(`404 page not found`));
const port = process.env.PORT || 3003;
app.listen(port, () => {console.log("app listening on port", port) });
export default app;