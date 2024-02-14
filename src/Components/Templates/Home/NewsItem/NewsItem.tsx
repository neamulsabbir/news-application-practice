import React, { useState } from "react";

export const NewsItem = () => {
	const [active, setActive] = useState("Home");
	return (
		<div>
			<div className="mx-auto  ">
				<ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base border-b border-black  pb-6 md:pb-8">
					<li>
						<a href="#">General</a>
					</li>
					<li>
						<a href="#">Business</a>
					</li>
					<li>
						<a href="#">Entertainment</a>
					</li>
					<li>
						<a href="#">Health</a>
					</li>
					<li>
						<a href="#">Science</a>
					</li>
					<li>
						<a href="#">Sports</a>
					</li>
					<li>
						<a href="#">Technology</a>
					</li>
				</ul>
			</div>
			<div className="container my-10 lg:my-14"></div>
		</div>
	);
};
