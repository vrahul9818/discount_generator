const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const User = require("../schema/offer_user");
const Offer = require("../schema/offer_coupons");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const router = express.Router();

router.post("/player_disp", async (req, res) => {
  const age = req.body.age;
  const data = await Offer.find();
  const filteredData = data.filter((offer) => {
    const target = offer.target;
    if (!target) {
      return false; // No target field, exclude offer
    }
    const ageRegex = /age\s*(>|<|=|>=|<=)\s*(\d+)/;
    const ageMatches = target.match(ageRegex);
    if (!ageMatches) {
      return false; // No age condition found, exclude offer
    }
    const ageOperator = ageMatches[1];
    const ageValue = parseInt(ageMatches[2]);
    switch (ageOperator) {
      case ">":
        return age > ageValue;
      case ">=":
        return age >= ageValue;
      case "<":
        return age < ageValue;
      case "<=":
        return age <= ageValue;
      case "=":
        return age === ageValue;
      default:
        return false; // Invalid operator, exclude offer
    }
  });
  // console.log(filteredData);
  res.send(filteredData);
});

module.exports = router;
