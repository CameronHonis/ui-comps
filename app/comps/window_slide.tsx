"use client";

import clsx from "clsx";
import React from "react";

type Props = {
    intervalMs: number;
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode[];
}

export default function WindowSlide(props: Props) {
    const [pageIdx, setPageIdx] = React.useState(0);
    let { current: sliderRef } = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        let _pageIdx = 0;
        const intervalId = setInterval(() => {
            _pageIdx = (_pageIdx + 1) % props.children.length;
            setPageIdx(_pageIdx);
        }, props.intervalMs);

        return () => clearInterval(intervalId);
    }, [props.children.length, props.intervalMs]);

    React.useEffect(() => {
        if (!sliderRef) return;

        let accWidthPx = 0;
        for (let i = 0; i < pageIdx; i++) {
            const child = sliderRef.children[i];
            const { width } = child.getBoundingClientRect();
            accWidthPx += width;
        }

        sliderRef.style.left = `-${accWidthPx}px`;
    }, [sliderRef, pageIdx]);

    return <div className={clsx("relative overflow-hidden", props.className)} style={props.style}>
        <div className="absolute flex overflow-hidden transition-all duration-500" ref={el => { sliderRef = el }}>
            {props.children.map((item, idx) => {
                return <div key={idx}>{item}</div>
            })}
        </div>
    </div >
}