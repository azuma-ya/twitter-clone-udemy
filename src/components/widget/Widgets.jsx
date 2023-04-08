import { Search } from "@mui/icons-material";
import React from "react";
import {
	TwitterTimelineEmbed,
	TwitterShareButton,
	TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css";

export default function Widgets() {
	return (
		<div className="widgets">
			<div className="widgets-input">
				<Search className="widgets-search-icon" />
				<input placeholder="キーワード検索" type="text" />
			</div>
			<div className="widget-container">
				<h2>今どうしてる？</h2>
				<TwitterTweetEmbed tweetId={"1640716383142150146"} />
				<TwitterTimelineEmbed
					sourceType="profile"
					screenName="Nintendo"
					options={{ height: 400 }}
				/>
				<TwitterShareButton
					url={"https://twitter.com/BlueMou36344770"}
					options={{ text: "#React.js勉強中", via: "BlueMou36344770" }}
				/>
			</div>
		</div>
	);
}
