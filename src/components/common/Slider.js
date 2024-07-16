// src/components/common/Slider.js
import React, { forwardRef, useState, useEffect } from 'react';
import theme from '../../themes/theme';
import styled from 'styled-components';

const StyledSlider = styled.input.attrs((props) => ({
        style: {
            background: `linear-gradient(to right, ${theme.colors.primary} ${props.value}%, ${theme.colors.seekbarSecondary} ${props.value}%)`
        }
    }))`
    -webkit-appearance: none;
    appearance: none;
    border-radius: 15px;
    width: 100%;
    height: 4px;
    outline: none;
    margin: 0;
    cursor: pointer;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        height: 12px;
        width: 12px;
        background: ${theme.colors.primary};
        border-radius: 50%;
        border: none;
    };
`;

const Slider = forwardRef(({ value, max, onChange }, ref) => {
    const [sliderValue, setSliderValue] = useState(0);

    useEffect(() => {
        if (max !== 0) {
            setSliderValue((value / max) * 100);
        }
    }, [value, max]);

    const handleInput = ((e) => {
        const newValue = e.target.value;
        const adjustedValue = (newValue / 100) * max;
        setSliderValue(newValue);
        onChange(adjustedValue);
    });

    return (
        <StyledSlider
            ref={ref}
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            step={0.1}
            onInput={handleInput}
        />
    );
});

export default Slider;
