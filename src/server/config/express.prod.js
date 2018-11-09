import morgan from "morgan";

const useProd = app => {
  app.use(morgan("combined"));
}

export default useProd;