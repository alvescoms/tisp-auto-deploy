import express from 'express'
import dotenv from 'dotenv';
import routes from './routes'

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api', routes);

app.get('/', (request, response) => response.send('Express + TypeScript Server'));

app.listen(process.env.SERVER_PORT, () => console.log(`⚡️ [server]: Server is running at https://${process.env.SERVER_ADDRESS}:${process.env.SERVER_PORT}`));