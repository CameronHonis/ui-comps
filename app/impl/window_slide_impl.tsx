"use client"
import React from "react";
import WindowSlide from "../comps/window_slide";

const INTERVAL_MS = 2000;

export default function WindowSlideImpl() {
	const [pageIdx, setPageIdx] = React.useState(0);

	React.useEffect(() => {
		let _pageIdx = 0;
		const intervalId = setInterval(() => {
			_pageIdx = (_pageIdx + 1) % 4;
			setPageIdx(_pageIdx);
		}, INTERVAL_MS);

		return () => clearInterval(intervalId);
	}, []);

	return <WindowSlide eleIdx={pageIdx} className="border-white border-2 w-[700px] h-[500px]">
		<div className="bg-[rgb(255,0,0)] w-[500px] h-[500px]">A</div>
		<div className="bg-[rgb(0,255,0)] w-[500px] h-[500px]">B</div>
		<div className="bg-[rgb(0,0,255)] w-[500px] h-[500px]">C</div>
		<div className="bg-[rgb(100,100,100)] w-[500px] h-[500px]">D</div>
	</WindowSlide>
}
