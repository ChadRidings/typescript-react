import { useRef } from "react";

const VideoPlayer = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const handlePlay = () => {
        videoRef.current?.play();
    };

    const handlePause = () => {
        videoRef.current?.pause();
    };

    const handleSeek = (seconds: number) => {
        if (videoRef.current) {
            videoRef.current.currentTime += seconds;
        }
    };

    return (
        <div className="p-5 text-gray-600 dark:bg-gray-800 dark:text-gray-200">
            <h3 className="text-2xl font-bold">Sample Video Player with Custom Controls</h3>
            <p className="mb-4">This is a sample video player with custom controls.</p>
            <video
                ref={videoRef}
                className="w-full"
                controls
                src="https://videos.pexels.com/video-files/3121102/3121102-uhd_2560_1440_24fps.mp4"
            />

            <div className="mt-2 flex gap-2">
                <span className="font-bold text-2xl dark:text-white">Custom Controls:</span>
                <button onClick={handlePlay}><i className="bi bi-play-circle text-blue-500 dark:text-white text-2xl"></i></button>
                <button onClick={handlePause}><i className="bi bi-pause-circle text-blue-500 dark:text-white text-2xl"></i></button>
                <button onClick={() => handleSeek(-5)}><i className="bi bi-rewind-circle text-blue-500 dark:text-white text-2xl"></i></button>
                <button onClick={() => handleSeek(5)}><i className="bi bi-fast-forward-circle text-blue-500 dark:text-white text-2xl"></i></button>
            </div>
        </div>
    );
}

export default VideoPlayer;
