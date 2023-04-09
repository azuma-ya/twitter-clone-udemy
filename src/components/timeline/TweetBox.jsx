import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../firebase";

export default function TweetBox() {
	const [tweetMessage, setTweetMessage] = useState("");
	const [tweetImage, setTweetImage] = useState("");

	const sendTweet = (e) => {
		e.preventDefault();
		addDoc(collection(db, "posts"), {
			displayName: "プログラミングチュートリアル",
			username: "Azuma_ya",
			verified: true,
			text: tweetMessage,
			avatar: "http://shincode.info/wp-content/uploads/2021/12/icon.png",
			image: tweetImage,
			timestamp: serverTimestamp(),
		});
		setTweetMessage("");
		setTweetImage("");
	};

	return (
		<div className="tweetbox">
			<form>
				<div className="tweetbox-input">
					<Avatar />
					<input
						value={tweetMessage}
						placeholder="今どうしてる？"
						type="text"
						onChange={(e) => setTweetMessage(e.target.value)}
					/>
				</div>
				<input
					value={tweetImage}
					className="image-input"
					placeholder="画像のURLを入力してください"
					type="text"
					onChange={(e) => setTweetImage(e.target.value)}
				/>
				<Button className="tweet-button" type="submit" onClick={sendTweet}>
					ツイートする
				</Button>
			</form>
		</div>
	);
}
