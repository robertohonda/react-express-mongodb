import morgan from "morgan";

const useDev = app => {
  app.use(morgan("dev"));
}

export default useDev;