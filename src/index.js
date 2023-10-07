const express = require("express");
const connect = require("./config/database");
const TweetRepository = require("./repository/tweet-repository");
const app = express();

app.listen(3000, async () => {
	console.log("server started");
	await connect();
	console.log("Mongo db connected");
	const tweetRepo = new TweetRepository();
});
