import Joi from 'joi';

const ProductSchema = Joi.object().keys({
  name: Joi.string().required(),
  price: Joi.number().required(),
  // address: Joi.object().keys({
  //   name: Joi.string().required(),
  //   number: Joi.number().required()
  // }).required()
})

export default ProductSchema