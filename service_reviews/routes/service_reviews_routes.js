const express = require('express');
const router = express.Router();
const { getReviews } = require('../controllers/service_reviewsController');
const { createReview } = require('../controllers/service_reviewsController');


router.get('/reviews', getReviews);
router.post('/reviews', createReview);
module.exports = router;
