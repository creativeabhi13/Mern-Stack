import Order from '../models/Order.js';
import Cart from '../models/cart.js';

// Place Order
export const placeOrder = async (req, res) => {
  const { name, address, phone } = req.body;

  try {
    const cart = await Cart.findById(req.session.cartId).populate('items.product');
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Your cart is empty" });
    }

    const newOrder = new Order({
      name,
      address,
      phone,
      cart: cart._id,
      status: 'Pending'
    });

    await newOrder.save();

    // Clear the cart
    req.session.cartId = null;

    return res.status(201).json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
