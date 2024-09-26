import WindowSlide from "../comps/window_slide";

export default function WindowSlideImpl() {
    // return <WindowSlide intervalMs={3000} className="border-white border-2" style={{width: 700, height: 500}}>
    return <WindowSlide intervalMs={3000} className="border-white border-2 w-[700px] h-[500px]">
        <div className="bg-[rgb(255,0,0)] w-[500px] h-[500px]">A</div>
        <div className="bg-[rgb(0,255,0)] w-[500px] h-[500px]">B</div>
        <div className="bg-[rgb(0,0,255)] w-[500px] h-[500px]">C</div>
        <div className="bg-[rgb(100,100,100)] w-[500px] h-[500px]">D</div>
    </WindowSlide>
}