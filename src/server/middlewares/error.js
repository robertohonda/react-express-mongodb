import APIError from '../helpers/error'

/**
 * Error handler. Send stacktrace only during development
 * @public
 */
export const handler = (err, req, res, next) => {
  const response = {
    code: err.status,
    message: err.message,
    errors: err.errors,
    stack: err.stack,
  };

  /*
  if (env !== 'development') {
    delete response.stack;
  }
  */

  res.status(err.status);
  res.json(response);
};

/**
 * If error is not an instanceOf APIError, convert it.
 * @public
 */
export const converter = (err, req, res, next) => {
  let convertedError = err;
  if (!(err instanceof APIError)) {
    convertedError = new APIError({
      message: err.message,
      status: err.status,
      errors: err.errors,
      //stack: err.stack,
    });
  }

  return handler(convertedError, req, res);
};

/**
 * Catch 404 and forward to error handler
 * @public
 */
export const notFound = (req, res, next) => {
  const err = new APIError({
    message: 'Not found',
    status: 404,
  });
  return handler(err, req, res);
};

export default {
  handler,
  converter,
  notFound
}