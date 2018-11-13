import app from "./config/express";
import mongoose from 'mongoose';
import { PORT, DB_URI } from "./config/config";

import "./models/user"

mongoose.connect(DB_URI, { useNewUrlParser: true })

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
