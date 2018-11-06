import Product from '../models/product';

export const createProduct = (req, res, next) => {
  const product = new Product(
    {
      name: 'teste',
      price: 5
    }
  );
  product.save((err) => {
    if (err) {
      return next(err);
    }
    res.send('Product Created successfully')
  })
}
