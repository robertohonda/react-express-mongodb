const options = {
  // return all errors a payload contains, not just the first one Joi finds
  abortEarly: false
}

const buildUsefulErrorObject = (error, type=error.name) => {
  
  const message = error.message
  let fields = []


  const details = error.details.map( ({message, path, context}) => { 
    fields = fields.concat(path.join('.'))
    return {message, path, context}
  })

  const errorMessage = {
    type,
    message,
    fields,
    details
  };

  return errorMessage
};

export const validateSchema = (schema, type) => (req, res, next) => {
  schema.validate(req.body, options)
    .then(() => next())
    .catch(error => res.status(200).json(buildUsefulErrorObject(error, type)))
}

export default {
  validateSchema
}