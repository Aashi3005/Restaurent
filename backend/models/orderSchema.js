const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderNumber: String,
    items: [String],
    completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Order', orderSchema);
