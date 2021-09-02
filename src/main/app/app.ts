import cors from 'cors';
import express, { Express } from 'express';
import setRoutes from '../routes';
import { connectKafka } from '../config/kafka';

connectKafka();

const app: Express = express();

app.use(express.json());
app.use(cors());
setRoutes(app);

export default app;
