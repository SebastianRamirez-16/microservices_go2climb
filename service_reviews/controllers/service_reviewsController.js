const service = require('../services/service');

const createReview = async (req, res) => {
  try {
    const review = await service.createReview(req.body);
    res.status(201).send(review);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getReviews = async (req, res) => {
  try {
    const reviews = await service.getReviews();
    res.send(reviews);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  createReview,
  getReviews
};
