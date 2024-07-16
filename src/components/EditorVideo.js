// src/components/EditorVideo.js
import { useContext, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyContext from "../context/MyContext";
import { addCut, setCurrentCut, setCurrentTime, setVideoLength, setVideoPlaying } from "../redux/actions";

function EditorVideo({ videoSrc }) {
    const dispatch = useDispatch();
    const currentTimeSeekbar = useSelector((state) => state.videoControls.currentTimeSeekbar);
    const isVideoPlaying = useSelector((state) => state.videoControls.isVideoPlaying);
    const volume = useSelector((state) => state.videoControls.volume);
    const playbackSpeed = useSelector((state) => state.videoControls.playbackSpeed);
    const isCropperActive = useSelector((state) => state.ui.isCropperActive);
    const videoRef = useRef(null);

    const { setStream } = useContext(MyContext);

    useEffect(() => {
        console.log("EditorVideo rerendered");
    });

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.addEventListener('ended', handleVideoEnded);
        }
        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('ended', handleVideoEnded);
            }
        };
    }, []);

    const handleVideoEnded = () => {
        dispatch(setVideoPlaying(false));
        setStream(videoRef.current.captureStream());
    };

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.currentTime = currentTimeSeekbar;
        }
    }, [currentTimeSeekbar]);

    useEffect(() => {
        if (videoRef.current) {
            if (isVideoPlaying) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    }, [isVideoPlaying]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = volume;
        }
    }, [volume]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = playbackSpeed.value;
        }
    }, [playbackSpeed]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.style.filter = `brightness(${isCropperActive ? 0.7 : 1})`;
        }
    }, [isCropperActive]);

    const handleTimeUpdate = (e) => {
        dispatch(setCurrentTime(e.target.currentTime));
    };

    return (
        <video width={'100%'} height={'100%'}
            ref={videoRef}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={function (e) {
                var duration = e.target.duration;
                dispatch(addCut({ visible: false, time: 0 }));
                var currentCut = { visible: false, time: duration };
                dispatch(addCut(currentCut));
                dispatch(setCurrentCut(currentCut));
                dispatch(setVideoLength(duration));
                setStream(videoRef.current.captureStream());
            }}
        >
            <source src={videoSrc} type="video/mp4" />
        </video>
    );
}

export default EditorVideo;
