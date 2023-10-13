const repository = require('../repositories/repository');
const touristService = require('./touristService');

const createReview = async (review) => {
  const tourists = await touristService.getTourists();
  const tourist = tourists.find(t => t.id === review.tourist_id);
  if (!tourist) {
    throw new Error("Tourist not found");
  }
  return repository.createReview(review);
};

const getReviews = async () => {
  return repository.getReviews();
};

module.exports = {
  createReview,
  getReviews
};
