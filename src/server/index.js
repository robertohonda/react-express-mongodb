import express from 'express'
import os from 'os'
import dotenv from 'dotenv'

const app = express();

dotenv.config();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(8080, () => console.log('Listening on port 8080!'));
