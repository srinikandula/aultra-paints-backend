const express = require('express');
const router = express.Router();
const { createBrand, getBrandsByProductId, getAllBrands, updateBrand, deleteBrand } = require('../controllers/brandController');

// Route to create a new brand
router.post('/', createBrand);

// Route to get all brands for a specific product by proId
router.get('/:proId', getBrandsByProductId);

// Route to get all brands 
router.get('/', getAllBrands);

// Route to update a brand by its ID
router.put('/:id', updateBrand);

// Route to delete a brand by its ID
router.delete('/:id', deleteBrand);

module.exports = router;