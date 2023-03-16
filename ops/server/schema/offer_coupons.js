const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const offer_schema = new Schema({
    unique_id: { type: String, ref: 'offer' },
    offer_id: { type: String },
    offer_title: { type: String },
    offer_description: { type: String },
    offer_sort_order: { type: Number },
    content: { type: String },
    target: { type: String },
    pricing: { type: Number }
  });

const coupons = mongoose.model('coupons', offer_schema);

module.exports = coupons;
