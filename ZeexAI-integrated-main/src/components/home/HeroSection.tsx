import { useRef, useState} from "react";
import logo from "../../assets/images/logo.png";
import zeex_video from "../../assets/video/zeex_video.mp4";
import { Link } from "react-router-dom";
const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const progressRef = useRef<HTMLInputElement>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState("00:00");

    // Format time like 00:12
    const formatTime = (sec: number) => {
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60);
        return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    };

    // Update progress bar + time
    const handleTimeUpdate = () => {
        if (!videoRef.current || !progressRef.current) return;
        const vid = videoRef.current;
        const percentage = (vid.currentTime / vid.duration) * 100;
        progressRef.current.value = percentage.toString();
        setCurrentTime(formatTime(vid.currentTime));
    };

    // Seeking
    const handleSeek = () => {
        if (!videoRef.current || !progressRef.current) return;
        const vid = videoRef.current;
        vid.currentTime = (Number(progressRef.current.value) / 100) * vid.duration;
    };

    // Play
    const handlePlay = () => {
        if (!videoRef.current) return;
        videoRef.current.play();
        setIsPlaying(true);
    };

    // Pause
    const handlePause = () => {
        if (!videoRef.current) return;
        videoRef.current.pause();
        setIsPlaying(false);
    };

    return (
        <section className="hero">
            <div className="hero-left">
                <h1>AI. DATA. IMPACT.</h1>
                <h2>TRANSFORMING INSIGHTS INTO ACTION</h2>
                <p>
                    From prevention to performance, Zeex AI turns everyday data into 
                    actionable intelligence for safer, smarter management.
                </p>

                <div className="hero-buttons">
                    <Link to='/contact'><button className="primary">Get a Demo</button></Link>
                    <Link to='/solution'><button className="secondary">Explore Solutions</button></Link>
                </div>
            </div>

            {/* VIDEO CARD */}
            <div className="video-card">

                {!isPlaying && (
                    <>
                        <img src={logo} className="video-thumb" />
                        <div className="play-btn" onClick={handlePlay}>▶</div>
                    </>
                )}

                <video
                    ref={videoRef}
                    className={`main-video ${isPlaying ? "show" : ""}`}
                    onTimeUpdate={handleTimeUpdate}
                >
                    <source src={zeex_video} type="video/mp4" />
                </video>

                {/* VIDEO CONTROLS */}
                {isPlaying && (
                    <div className="video-controls">
                        <button onClick={handlePause}>⏸</button>

                        <input
                            type="range"
                            ref={progressRef}
                            min="0"
                            max="100"
                            defaultValue="0"
                            onChange={handleSeek}
                        />

                        <span>{currentTime}</span>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Hero;
