// src/components/Cropper.js
import React, { useEffect } from 'react';
import { Rnd } from 'react-rnd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCropperPosition, setCropperSize } from '../redux/actions';

// Todo:
// - add grid lines
function Cropper({ cropperInfo, container }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [size, setSize] = useState({ width: 100, height: 307 });
    const aspectRatio = useSelector((state) => state.cropper.aspectRatio);
    // const syncCropper = useSelector((state) => state.cropper.syncCropper);
    const dispatch = useDispatch();

    useEffect(() => {
        var x = container.current.offsetWidth / 2 - parseFloat(size.width) / 2;
        var initialPosition = { x, y: 0 };
        setPosition(initialPosition);

        cropperInfo.current = { position: initialPosition, size };
        dispatch(setCropperPosition(initialPosition));
        dispatch(setCropperSize(size));
    }, []);

    useEffect(() => {
        var ratio = aspectRatio.value.w / aspectRatio.value.h;
        var newWidth = parseFloat(size.height) * ratio;
        var x = container.current.offsetWidth / 2 - newWidth / 2;
        
        if (newWidth > container.current.offsetWidth) {
            newWidth = container.current.offsetWidth;
            x = 0;
        }
        setPosition({ x, y: 0 });
        setSize({ width: newWidth, height: size.height });
        dispatch(setCropperSize({ width: newWidth, height: size.height }));
        dispatch(setCropperPosition({ x, y: 0 }));
    }, [aspectRatio]);

    // useEffect(() => {
    //     setPosition(syncCropper.cropperPosition);
    //     setSize(syncCropper.cropperSize);
    // }, [syncCropper]);

    const handleDrag = (e, d) => {
        setPosition({ x: d.x, y: d.y });
        dispatch(setCropperPosition({ x: d.x, y: d.y }));
        cropperInfo.current = { ...cropperInfo.current, position: { x: d.x, y: d.y } };
    }

    const handleResize = (e, direction, ref, delta, position) => {
        setSize({ width: ref.style.width, height: ref.style.height });
        setPosition(position);
        dispatch(setCropperPosition(position));
        dispatch(setCropperSize({ width: parseFloat(ref.style.width), height: parseFloat(ref.style.height) }));
        cropperInfo.current = { position, size: { width: parseFloat(ref.style.width), height: parseFloat(ref.style.height) } };
    }

    return (
        <Rnd
            size={{ width: size.width, height: size.height }}
            position={{ x: position.x, y: position.y }}
            enableResizing={{
                top: false,
                right: true,
                bottom: false,
                left: true,
                topRight: false,
                bottomRight: false,
                bottomLeft: false,
                topLeft: false,
            }}
            onDrag={handleDrag}
            onResize={handleResize}
            minWidth={50}
            bounds="parent"
            style={{ border: '1px solid #ccc', backgroundColor: '#FFFFFF3B' }}
        />
    );
}

export default Cropper;
