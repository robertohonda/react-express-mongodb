import app from './config/express';
import {PORT} from './config/config'

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
