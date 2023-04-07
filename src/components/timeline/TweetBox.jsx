import { Avatar, Button } from "@mui/material";
import React from "react";
import "./TweetBox.css";

export default function TweetBox() {
	return (
		<div className="tweetbox">
			<form>
				<div className="tweetbox-input">
					<Avatar />
					<input placeholder="今どうしてる？" type="text"></input>
				</div>
				<input
					className="image-input"
					placeholder="画像のURLを入力してください"
					type="text"
				/>
				<Button className="tweet-button" type="submit">
					ツイートする
				</Button>
			</form>
		</div>
	);
}
