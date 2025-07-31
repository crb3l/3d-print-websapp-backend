import express from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// const Stripe=require('stripe') this does not work because of ESM Modules, that the type of these scripts is for in config
// so we have to go with import stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

router.post('/create-checkout-session', async (req, res) => {
  console.log('Request body:', req.body); // Added this for error handling/logging
  const { items } = req.body;

  try {
    console.log('Processing items:', items); // Added this for error handling/logging
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: items.map((item: any) => ({
        price_data: {
          currency: item.product.currency.toLowerCase(), // Use the product's currency from DB
          product_data: {
            name: item.product.name,
            description: item.product.description,
            images: item.product.images
          },
          unit_amount: Math.round(item.product.price * 100), // Access price from product object
        },
        quantity: item.quantity,
      })),
      success_url: 'https://treideee.ro/#/about',
      cancel_url: 'https://treideee.ro/#/contact',
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

export default router;
