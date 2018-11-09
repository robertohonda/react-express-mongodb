const controllerHandler = (promise) => (req, res, next) => {
  return promise(req, res, next)
    .then( result => res.json(result || { message: 'OK' }))
    .catch( error => res.status(500) && next(error));
};

export default controllerHandler;