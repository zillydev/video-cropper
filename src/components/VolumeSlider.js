// src/components/VolumeSlider.js
import React from 'react';
import Slider from './common/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { setVolume } from '../redux/actions';

function VolumeSlider() {
    const dispatch = useDispatch();
    const volume = useSelector((state) => state.videoControls.volume);

    const handleVolumeChange = (newVolume) => {
        dispatch(setVolume(newVolume));
    };

    return (
        <Slider
            value={volume}
            max={1}
            onChange={handleVolumeChange}
        />
    );
}

export default VolumeSlider;
