// src/components/PreviewVideo.js
import { useEffect, useRef, useContext } from "react";
import { useSelector } from "react-redux";
import React from "react";
import MyContext from "../context/MyContext";

const PreviewVideo = () => {
    const cropperPosition = useSelector((state) => state.cropper.cropperPosition);
    const cropperSize = useSelector((state) => state.cropper.cropperSize);
    const videoRef = useRef(null);

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
