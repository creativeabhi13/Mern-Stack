import Cart from '../models/cart.js';
import Product from '../models/product.js';

// Add to Cart
export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const cart = await Cart.findById(req.session.cartId);
    let cartItem = {
      product: product._id,
      quantity
    };

    if (!cart) {
      const newCart = new Cart({
        items: [cartItem],
        totalPrice: product.price * quantity
      });

      await newCart.save();
      req.session.cartId = newCart._id;
      return res.status(201).json(newCart);
    } else {
      const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push(cartItem);
      }

      cart.totalPrice += product.price * quantity;
      await cart.save();
      return res.status(200).json(cart);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Update Cart Item Quantity
export const updateCartItem = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const cart = await Cart.findById(req.session.cartId);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

    if (itemIndex === -1) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    cart.items[itemIndex].quantity = quantity;
    cart.totalPrice = cart.items.reduce((total, item) => total + item.quantity * item.product.price, 0);

    await cart.save();
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Remove Item from Cart
export const removeCartItem = async (req, res) => {
  const { productId } = req.body;

  try {
    const cart = await Cart.findById(req.session.cartId);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter(item => item.product.toString() !== productId);
    cart.totalPrice = cart.items.reduce((total, item) => total + item.quantity * item.product.price, 0);

    await cart.save();
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Get Cart Items
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findById(req.session.cartId).populate('items.product');
    if (!cart) {
      return res.status(404).json({ message: "Cart is empty" });
    }
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
