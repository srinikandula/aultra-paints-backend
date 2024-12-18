const express = require('express');
const router = express.Router();
const passport = require('passport');

const orderController = require('../controllers/orderController');

router.use(passport.authenticate('jwt', { session: false }));

// Create an order
router.post('/orders', orderController.createOrder);

// Get all orders
router.get('/orders', orderController.getAllOrders);

// Get a single order
router.get('/orders/:id', orderController.getOrderById);

// Update an order
router.put('/orders/:id', orderController.updateOrder);

// Delete an order
router.delete('/orders/:id', orderController.deleteOrder);

module.exports = router;
