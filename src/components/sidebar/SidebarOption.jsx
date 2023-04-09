import React from "react";
import "./SidebarOption.css";

export default function SidebarOption({ text, Icon, active }) {
	return (
		<div className={`sidebar-option ${active && "sidebar-option-active"}`}>
			<Icon />
			<h2>{text}</h2>
		</div>
	);
}
