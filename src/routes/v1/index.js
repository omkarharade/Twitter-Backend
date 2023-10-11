import express from "express";

import { createTweet, getTweet } from "../../controllers/tweet-controller.js";
import { toggleLike } from "../../controllers/like-controller.js";
import { signup } from "../../controllers/auth-controller.js";

const router = express.Router();

// tweets
router.post("/tweets", createTweet);
router.get("/tweets/:id", getTweet);

// likes
router.post("/likes/toggle", toggleLike);

// comments
router.post("/comments", createComment);

//auth
router.post("/signup", signup);

export default router;
