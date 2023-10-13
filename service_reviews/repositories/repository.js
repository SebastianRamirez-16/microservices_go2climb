const db = require("../models");
const ServiceReviews = db.ServiceReviews;


const createReview = async (review) => {
  console.log(ServiceReviews);
  return ServiceReviews.create(review);
};

const getReviews = async () => {
    console.log(ServiceReviews);
  return ServiceReviews.findAll();
};

module.exports = {
  createReview,
  getReviews
};
