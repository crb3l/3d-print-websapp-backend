import express from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// const Stripe=require('stripe') this does not work because of ESM Modules, that the type of these scripts is for in config
// so we have to go with import stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

router.post('/create-checkout-session', async (req, res) => {
  const { cartItems } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: cartItems.map((item: any) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            description: item.description,
          },
          unit_amount: Math.round(item.price * 100), // cents
        },
        quantity: item.quantity,
      })),
      success_url: 'https://treideee.ro/#/about',
      cancel_url: 'https://treideee.ro/#/contact',
    });

    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

export default router;
