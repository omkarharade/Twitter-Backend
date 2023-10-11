import express from "express";

import { createTweet, getTweet } from "../../controllers/tweet-controller.js";
import { toggleLike } from "../../controllers/like-controller.js";
import { signup, login } from "../../controllers/auth-controller.js";

import { authenticate } from "../../middlewares/authenticate.js";

const router = express.Router();

// tweets
router.post("/tweets", authenticate, createTweet);
router.get("/tweets/:id", getTweet);

// likes
router.post("/likes/toggle", toggleLike);

// comments
router.post("/comments", createComment);

//auth
router.post("/signup", signup);
router.post("/login", login);

export default router;
