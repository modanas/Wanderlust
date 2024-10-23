const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const {
	validateReview,
	isLoggedIn,
	isReviewAuthor,
} = require("../middleware.js");

const reviewController = require("../controllers/review.js");
const review = require("../models/review");

//Post Review Route
router.post(
	"/",
	isLoggedIn,
	validateReview,
	wrapAsync(reviewController.createReview)
);

//Delete Review Route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;
