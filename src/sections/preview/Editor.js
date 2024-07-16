// src/sections/Editor.js
import ToggleIconButton from "../../components/common/ToggleIconButton";
import { ReactComponent as PlayIcon } from "../../assets/play icon.svg";
import { ReactComponent as PauseIcon } from "../../assets/pause icon2.svg";
import { ReactComponent as VolumeIcon } from "../../assets/volume icon.svg";
import { ReactComponent as MuteIcon } from "../../assets/volume mute icon.svg";
import { ReactComponent as DropdownIcon } from "../../assets/dropdown icon.svg";
import theme from "../../themes/theme";
import Dropdown from "../../components/common/Dropdown";
import EditorVideo from "../../components/EditorVideo";
import VideoSeekSlider from "../../components/VideoSeekSlider";
import VolumeSlider from "../../components/VolumeSlider";
import Cropper from "../../components/Cropper";
import PlaybackTime from "../../components/PlaybackTime";
import { useDispatch, useSelector } from "react-redux";
import { addCut, setCropperAspectRatio, setPlaybackSpeed, setVideoPlaying, setVolume } from "../../redux/actions";
import { useEffect, useRef } from "react";
import Button from "../../components/common/Button";

// todo: refactor
function Editor({ currentTime }) {
    const dispatch = useDispatch();
    const isVideoPlaying = useSelector((state) => state.videoControls.isVideoPlaying);
    const volume = useSelector((state) => state.videoControls.volume);
    const playbackSpeed = useSelector((state) => state.videoControls.playbackSpeed);
    const aspectRatio = useSelector((state) => state.cropper.aspectRatio);
    const isCropperActive = useSelector((state) => state.ui.isCropperActive);
    const videoCont = useRef(null);
    const cropperInfo = useRef({});

    useEffect(() => {
        console.log("Editor rerendered");
    });

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '15px',
                width: '100%',
            }}
        >
            <div
                ref={videoCont}
                style={{
                    maxWidth: '460px',
                    maxHeight: '307px',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    position: 'relative',
                    marginBottom: '20px',
                }}
            >
                <EditorVideo videoSrc={"test.mp4"} container={videoCont} />
                {isCropperActive && <Cropper cropperInfo={cropperInfo} container={videoCont} />}
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    width: '100%',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                    }}
                >
                    <ToggleIconButton
                        icon={<PauseIcon width={"100%"} />}
                        iconDisabled={<PlayIcon width={"100%"} />}
                        isActive={isVideoPlaying}
                        onClick={() => dispatch(setVideoPlaying(!isVideoPlaying))}
                        sx={{ width: "20px", height: "20px", display: 'flex', alignItems: 'center' }}
                    />
                    <VideoSeekSlider timeRef={currentTime} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ color: theme.colors.primary, fontSize: '12px' }}>
                        <PlaybackTime />
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            width: '71px',
                        }}
                    >
                        <ToggleIconButton
                            icon={<VolumeIcon />}
                            iconDisabled={<MuteIcon />}
                            isActive={volume !== 0}
                            onClick={() => dispatch(setVolume(volume === 0 ? 1 : 0))}
                            sx={{ width: "16px", height: "16px", display: 'flex', alignItems: 'center' }}
                        />
                        <VolumeSlider />
                    </div>
                </div>
            </div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                }}
            >
                <div style={{ display: 'flex', gap: '8px' }}>
                    <Dropdown text={"Playback Speed"} icon={<DropdownIcon />}
                        options={[
                            { text: "0.25x", value: 0.25 },
                            { text: "0.5x", value: 0.5 },
                            { text: "0.75x", value: 0.75 },
                            { text: "1x", value: 1 },
                            { text: "1.25x", value: 1.25 },
                            { text: "1.5x", value: 1.5 },
                            { text: "1.75x", value: 1.75 },
                            { text: "2x", value: 2 },
                        ]}
                        selected={playbackSpeed}
                        onOptionSelect={(option) => dispatch(setPlaybackSpeed(option))}
                    />
                    <Dropdown text={"Cropper Aspect Ratio"} icon={<DropdownIcon />}
                        options={[
                            { text: "9:18", value: {w: 9, h: 18} },
                            { text: "9:16", value: {w: 9, h: 16} },
                            { text: "4:3", value: {w: 4, h: 3} },
                            { text: "3:4", value: {w: 3, h: 4} },
                            { text: "1:1", value: {w: 1, h: 1} },
                            { text: "4:5", value: {w: 4, h: 5} },
                        ]}
                        selected={aspectRatio}
                        onOptionSelect={(option) => dispatch(setCropperAspectRatio(option))}
                    />
                </div>

                <div>
                    <Button text={"Cut"} type={"action"} onclick={() => {
                        console.log("adding cut", currentTime.current);
                        console.log("cropperInfo", cropperInfo.current);
                        dispatch(addCut({
                            visible: true,
                            time: currentTime.current,
                            position: cropperInfo.current.position,
                            size: cropperInfo.current.size,
                            playbackSpeed,
                            volume,
                        }));
                    }} />
                </div>
            </div>
        </div>
    );
}

export default Editor;
