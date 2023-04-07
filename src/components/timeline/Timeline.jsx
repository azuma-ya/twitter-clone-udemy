import React from "react";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

export default function Timeline() {
	return (
		<div className="timeline">
			<div className="timeline-header">
				<h2>ホーム</h2>
			</div>
			<TweetBox />
			<Post />
		</div>
	);
}
