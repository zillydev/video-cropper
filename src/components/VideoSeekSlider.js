// src/components/VideoSeekSlider.js
import React, { useEffect, useState, useRef } from 'react';
import Slider from './common/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { removeCut, setCurrentSegment, setCurrentTimeSeekbar } from '../redux/actions';
import theme from '../themes/theme';
import { getCurrentSegmentFromCuts } from '../utils/getCurrentSegmentFromCuts';

function VideoSeekSlider({ timeRef }) {
    const dispatch = useDispatch();
    const currentTime = useSelector((state) => state.videoControls.currentTime);
    const videoLength = useSelector((state) => state.videoControls.videoLength);
    const cuts = useSelector((state) => state.ui.cuts);
    const sliderRef = useRef(null);
    const [sliderRect, setSliderRect] = useState(null);
    const currentSegment = useSelector((state) => state.ui.currentSegment);

    const handleSeekChange = (newTime) => {
        dispatch(setCurrentTimeSeekbar(newTime));
    };

    useEffect(() => {
        if (timeRef) {
            timeRef.current = currentTime;
        }
        dispatch(setCurrentSegment(getCurrentSegmentFromCuts(currentTime, videoLength, cuts)));
    }, [currentTime]);

    useEffect(() => {
        let currSegment = getCurrentSegmentFromCuts(currentTime, videoLength, cuts);

        


        dispatch(setCurrentSegment(getCurrentSegmentFromCuts(currentTime, videoLength, cuts)));
    }, [cuts]);

    useEffect(() => {
        const updateSliderRect = () => {
            if (sliderRef.current) {
                setSliderRect(sliderRef.current.getBoundingClientRect());
            }
        };

        updateSliderRect();
        window.addEventListener('resize', updateSliderRect);
        return () => window.removeEventListener('resize', updateSliderRect);
    }, []);

    const calculateCutPosition = (time) => {
        if (!sliderRect || videoLength === 0) return '0%';

        const cutIconWidth = 8;
        const thumbWidth = 12;
        const sliderWidth = sliderRect.width;

        const effectiveWidth = sliderWidth - thumbWidth;
        const percentage = (time / videoLength) * 100;

        const adjustedPosition = (percentage / 100) * effectiveWidth + thumbWidth * 0.80 - cutIconWidth / 2;

        return `${adjustedPosition}px`;
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
            }}
        >
            <div style={{ position: 'absolute', width: `calc(${calculateCutPosition(currentSegment.end)} - ${calculateCutPosition(currentSegment.start)})`, height: '2px', top: "-24px", left: calculateCutPosition(currentSegment.start), backgroundColor: theme.colors.buttonPrimary }} />
            {cuts.map((cut, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        width: '8px',
                        height: '12px',
                        backgroundColor: theme.colors.buttonPrimary,
                        top: '-16px',
                        left: calculateCutPosition(cut.time),
                        transform: 'translateX(-50%)',
                    }}
                    onClick={() => dispatch(removeCut(cut))}
                />
            ))}
            <Slider
                ref={sliderRef}
                value={currentTime}
                max={videoLength}
                onChange={handleSeekChange}
            />
        </div>
    );
}

export default VideoSeekSlider;
