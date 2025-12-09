import express from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// const Stripe=require('stripe') this does not work because of ESM Modules, that the type of these scripts is for in config
// so we have to go with import stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

router.post('/create-checkout-session', async (req, res) => {
  // console.log('Request body:', req.body); // Added this for error handling/logging
  
  const { items } = req.body;
  const countryAlpha2: Stripe.Checkout.SessionCreateParams.ShippingAddressCollection.AllowedCountry[] = [ "AF", "AL", "DZ", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "CV", "KH", "CM", "CA", "KY", "CF", "TD", "CL", "CN", "CO", "KM", "CD", "CG", "CK", "CR", "HR", "CW", "CY", "CZ", "CI", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "SZ", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "VA", "HN", "HK", "HU", "IS", "IN", "ID","IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MG", "MW", "MY", "MV", "ML", "MT", "MQ", "MR", "MU", "YT", "MX", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NO", "OM", "PK", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "MK", "RO", "RU", "RW", "RE", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SE", "CH","TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UY", "UZ", "VU", "VE", "VN", "VG", "WF", "EH", "YE", "ZM", "ZW", "AX" ];
  try {
    console.log('Processing items:', items); // Added this for error handling/logging
    const session = await stripe.checkout.sessions.create({
      shipping_address_collection: { 
        allowed_countries: countryAlpha2,},
      shipping_options:[
    {
      shipping_rate_data: {
        type: 'fixed_amount',
        fixed_amount: {
          amount: 0,
          currency: 'eur',
        },
        display_name: 'Free shipping',
        delivery_estimate: {
          minimum: {
            unit: 'business_day',
            value: 5,
          },
          maximum: {
            unit: 'business_day',
            value: 7,
          },
        },
      },
    },
    {
      shipping_rate_data: {
        type: 'fixed_amount',
        fixed_amount: {
          amount: 2000,
          currency: 'eur',
        },
        display_name: 'Express Delivery',
        delivery_estimate: {
          minimum: {
            unit: 'business_day',
            value: 1,
          },
          maximum: {
            unit: 'business_day',
            value: 5,
          },
        },
      },
    },
    {
      shipping_rate_data: {
        type: 'fixed_amount',
        fixed_amount: {
          amount: 5000,
          currency: 'eur',
        },
        display_name: 'Lightning Fast Delivery',
        delivery_estimate: {
          minimum: {
            unit: 'business_day',
            value: 1,
          },
          maximum: {
            unit: 'business_day',
            value: 2,
          },
        },
      },
    },
  ],
      billing_address_collection: 'required',
      
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
