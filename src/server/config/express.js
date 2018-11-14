import express from "express";
import mongoose from './mongoose'
import useDev from './express.dev'
import os from "os";
import bodyParser from "body-parser";
import routes from "../routes";
import path from "path";
import cors from "cors";
import error from '../middlewares/error';
import { NODE_ENV, DB_URI } from './config'
import useProd from "./express.prod";
import passport from './passport'

const app = express();

mongoose.connect(DB_URI, { useNewUrlParser: true })

app.use(bodyParser.json());
app.use( bodyParser.urlencoded({ extended : false }) );
app.use(cors());
app.use(passport.initialize())

switch(NODE_ENV) {
  case 'development':
    useDev(app);
    break;
  case 'production': 
    useProd(app)
    break;
  default:
    useDev(app);
}

app.use(express.static("dist"));
app.get("/api/getUsername", (req, res) =>
  res.json({ username: os.userInfo().username })
);
app.use("/api", routes);

// if error is not an instanceOf APIError, convert it.
app.use('/api', error.converter);

// catch 404 and forward to error handler
app.use('/api', error.notFound);

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "../../dist/index.html"), function(err) {
    // if (err) {
    //   res.status(500).send(err)
    // }
  });
});

export default app;
