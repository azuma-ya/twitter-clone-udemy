import {
	ChatBubbleOutline,
	FavoriteBorder,
	PublishOutlined,
	Repeat,
	VerifiedUser,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";

export default function Post({
	displayName,
	username,
	verified,
	text,
	avatar,
	image,
}) {
	return (
		<div className="post">
			<div className="post-avatar">
				<Avatar src={avatar} />
			</div>
			<div className="post-body">
				<div className="post-header">
					<div className="post-header-text">
						<h3>
							{displayName}
							<span className="post-header-special">
								<VerifiedUser className="post-badge" />@{username}
							</span>
						</h3>
					</div>
					<div className="post-header-description">
						<p>{text}</p>
					</div>
				</div>
				<img src={image} alt="" />
				<div className="post-footer">
					<ChatBubbleOutline fontSize="small" />
					<Repeat fontSize="small" />
					<FavoriteBorder fontSize="small" />
					<PublishOutlined fontSize="small" />
				</div>
			</div>
		</div>
	);
}
