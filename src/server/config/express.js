import express from 'express';
import os from 'os';
import dotenv from 'dotenv';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import routes from '../routes'

const app = express();

dotenv.config();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.json({ username: os.userInfo().username }));

app.use('/api', routes)

export default app;