// src/components/PlaybackTime.js
import formatTime from "../utils/formatTime"
import theme from "../themes/theme";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function PlaybackTime() {
    const currentTime = useSelector((state) => state.videoControls.currentTime);
    const videoLength = useSelector((state) => state.videoControls.videoLength);

    useEffect(() => {
        console.log("PlaybackTime rerendered");
    });

    return (
        <>
            {formatTime(currentTime)} <span style={{ color: theme.colors.secondary }}> | {formatTime(videoLength)}</span>
        </>
    );
}

export default PlaybackTime;
