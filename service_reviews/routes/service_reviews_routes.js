const express = require('express');
const router = express.Router();
const { getReviews } = require('../controllers/service_reviewsController');
const { createReview } = require('../controllers/service_reviewsController');
const { getReviewById } = require('../controllers/service_reviewsController');


router.get('/reviews', getReviews);
router.post('/reviews', createReview);
router.get('/reviews/:id', getReviewById);
module.exports = router;
