import { config } from 'dotenv';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import swaggerDocument from './swagger.json';
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
const port = process.env.PORT || 3000;
app.listen(port, () => { });
export default app;