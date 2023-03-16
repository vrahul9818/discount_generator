const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const Offer = require('../schema/offer_coupons');
const cors = require('cors');
const coupons = require('../schema/offer_coupons');

const app = express();
const router = express.Router();
const SECRET_KEY = 'j';

app.use(bodyParser.json());
app.use(cors())

router.post('/coupons', async (req, res) => {
    const decoded = jwt.verify(req.body.token, SECRET_KEY);
    console.log(decoded ,"decoded");
  try {
    const coupon = await Offer.create({
      unique_id: decoded.data.unique_id ,
      offer_id: req.body.offer_id,
      offer_title: req.body.offer_title,
      offer_description: req.body.offer_description,
      offer_sort_order: req.body.offer_sort_order,
      content: req?.body?.content ,
      target: req?.body?.target,
      pricing: req?.body?.pricing 
    });
   console.log(coupon);
    res.status(201).json({ coupon });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.get('/coupons', async (req, res) => {
  try {
    // console.log(req.headers.authorization);
    const token = req.headers.authorization.split('Bearer')[1];
    // console.log(token)
    const decoded = jwt.verify(token, SECRET_KEY);
    // console.log(decoded)
    const uniqueId = decoded.data.unique_id;
    const coupons = await Offer.find({ unique_id: uniqueId });
    res.send(coupons);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error fetching coupons');
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const deleteData = await Offer.findOneAndDelete({ _id: req.body.id });
    res.status(200).send("deleted");
  } catch (error) {
    console.log(error);
    res.status(500).send('Error deleting coupon');
  }
});




module.exports = router;
