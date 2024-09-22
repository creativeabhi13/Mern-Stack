import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  items: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: { type: Number, required: true }
  }],
  totalPrice: { type: Number, required: true }
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
