// src/components/PreviewVideo.js
import { useState, useEffect, useRef, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import MyContext from "../context/MyContext";
import { setCropperPosition, setCropperSize, setCurrentCut, setPlaybackSpeed, setVolume, syncCropper } from "../redux/actions";

const PreviewVideo = ({ currentTime }) => {
    const vidCurrentTime = useSelector((state) => state.videoControls.currentTime);
    const cropperPosition = useSelector((state) => state.cropper.cropperPosition);
    const cropperSize = useSelector((state) => state.cropper.cropperSize);
    const videoRef = useRef(null);
    const cuts = useSelector((state) => state.ui.cuts);
    const currentCut = useSelector((state) => state.ui.currentCut);
    const dispatch = useDispatch();

    const { stream } = useContext(MyContext);

    useEffect(() => {
        if (videoRef.current && stream) {
            videoRef.current.srcObject = stream;
        }
    }, [stream]);

    return (
        <div
            style={{
                display: "block",
                position: "relative",
                width: `${cropperSize.width}px`,
                height: `${cropperSize.height}px`,
                overflow: "hidden",
                borderRadius: "10px",
            }}
        >
            <video
                ref={videoRef}
                muted
                autoPlay
                style={{
                    position: "absolute",
                    marginLeft: `-${cropperPosition.x}px`,
                    marginTop: `-${cropperPosition.y}px`,
                    height: "307px",
                }}
            />
            <br />
        </div>
    );
}

export default PreviewVideo;

    // const findCurrentCutSegment = (time) => {
    //     // Sort markers by startTime
    //     const sortedCuts = [...cuts].sort((a, b) => a.startTime - b.startTime);
        
    //     // Check if time is before the first cut
    //     if (sortedCuts.length === 0 || time < sortedCuts[0].startTime) {
    //         return null; // Use original video settings
    //     }
        
    //     // Find the current segment
    //     for (let i = 0; i < sortedCuts.length; i++) {
    //         if (time >= sortedCuts[i].startTime && 
    //             (i === sortedCuts.length - 1 || time < sortedCuts[i + 1].startTime)) {
    //             return sortedCuts[i];
    //         }
    //     }
        
    //     // If we're past the last cut, use the last cut's settings
    //     return sortedCuts[sortedCuts.length - 1];
    // };

    // const findCurrentCutSegment = (time) => {
    //     console.log('Current time:', time);
    //     console.log('All cuts:', cuts);

    //     if (cuts.length === 0) {
    //         console.log('No cuts available');
    //         return null;
    //     }

    //     const currentCut = cuts.find(cut => time >= cut.startTime && time < cut.endTime);

    //     if (currentCut) {
    //         console.log('Found current cut:', currentCut);
    //         return currentCut;
    //     } else {
    //         console.log('No current cut found');
    //         return null;
    //     }
    // };

    // useEffect(() => {
    //     const currentSegment = findCurrentCutSegment(vidCurrentTime);
        
    //     if (currentSegment) {
    //         console.log('Applying crop:', currentSegment);
    //         dispatch(syncCropper({ cropperPosition: currentSegment.position, cropperSize: currentSegment.size }));
    //         dispatch(setCropperPosition(currentSegment.position));
    //         dispatch(setCropperSize(currentSegment.size));
    //         dispatch(setPlaybackSpeed(currentSegment.playbackSpeed));
    //         dispatch(setVolume(currentSegment.volume));
    //     } else {
    //         // Reset to original video settings
    //         // dispatch(syncCropper({ 
    //         //     cropperPosition: { x: 0, y: 0 }, 
    //         //     cropperSize: { width: videoRef.current.videoWidth, height: videoRef.current.videoHeight } 
    //         // }));
    //         // dispatch(setPlaybackSpeed(1));
    //         // dispatch(setVolume(1));
    //     }
    // }, [vidCurrentTime, cuts, dispatch]);

    // useEffect(() => {
    //     console.log("here", vidCurrentTime);
    //     var currCut = null;

    //     var sortedCuts = [...cuts].sort((a, b) => a.time - b.time);
    //     console.log("cuts", sortedCuts);

    //     for (let i = 0; i < sortedCuts.length-1; i++) {
    //         if (sortedCuts[i].time <= vidCurrentTime && vidCurrentTime < sortedCuts[i+1].time) {
    //             currCut = sortedCuts[i+1];
    //             break;
    //         }
    //     }
    //     console.log("currcut", currCut);

    //     if (currCut && currCut.visible && currCut !== currentCut) {
    //         console.log("currcut2", currCut);
    //         dispatch(setCropperPosition(currCut.position));
    //         dispatch(setCropperSize(currCut.size));
    //         dispatch(setPlaybackSpeed(currCut.playbackSpeed));
    //         dispatch(setVolume(currCut.volume));
    //         dispatch(setCurrentCut(currCut));
    //         dispatch(syncCropper({ cropperPosition: currCut.position, cropperSize: currCut.size }));
    //     }
    // }, [vidCurrentTime, cuts]);

    // useEffect(() => {
    //     console.log('Video time:', currentTime.current);
    //     const currentSegment = findCurrentCutSegment(currentTime.current);
    //     if (currentSegment !== activeCutSegment) {
    //         setActiveCutSegment(currentSegment);
    //     }
    // }, [vidCurrentTime, cuts, activeCutSegment]);

    // useEffect(() => {
    //     if (activeCutSegment) {
    //         // Apply crop effect using activeCutSegment.cropDetails
    //         console.log('Applying crop:', activeCutSegment);
    //         dispatch(syncCropper({ cropperPosition: activeCutSegment.position, cropperSize: activeCutSegment.size }));
    //         dispatch(setCropperPosition(activeCutSegment.position));
    //         dispatch(setCropperSize(activeCutSegment.size));
    //         dispatch(setPlaybackSpeed(activeCutSegment.playbackSpeed));
    //         dispatch(setVolume(activeCutSegment.volume));
    //     }
    // }, [activeCutSegment]);
