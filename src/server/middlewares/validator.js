import APIError from "../helpers/error";

const buildUsefulErrorObject = (error, type=error.name) => {
  
  const message = error.message
  const errors = error.errors

  const errorMessage = new APIError({
    status: 200,
    type,
    message,
    errors
  });

  return errorMessage
};

export const validateModel = (model, type) => (req, res, next) => {
  model(req.body).validate()
    .then(() => next())
    .catch(error => next(buildUsefulErrorObject(error, type)))
}

export default {
  validateModel
}