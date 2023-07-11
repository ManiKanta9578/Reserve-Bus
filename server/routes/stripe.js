const router = require("express").Router();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_KEY);


router.post('/create-checkout-session', async (req, res) => {
  console.log("Stripe triggered")
  const {selectedSeats} = req.body;
  
  const line_items = [{
      price:'price_1NRe1OSCjiyTSO3kEBChZqmY',
      quantity:parseInt(selectedSeats.length),
  }]

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/receipt`,
    cancel_url: `${process.env.CLIENT_URL}/info`,
  });

  res.send({url: session.url});
});

module.exports = router;