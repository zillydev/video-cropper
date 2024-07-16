// src/pages/PreviewSession.js
import React, { useEffect, useRef } from 'react';
import Editor from '../sections/preview/Editor';
import Preview from '../sections/preview/Preview';
import Footer from '../sections/preview/Footer';

function PreviewSession() {
    const currentTime = useRef(0);

    useEffect(() => {
        console.log('PreviewSession rendered');
    });

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    padding: '0px 20px',
                    height: "100%",
                }}
            >
                <Editor currentTime={currentTime} />
                <Preview currentTime={currentTime} />
            </div>

            <Footer />
        </div>
    );
}

export default PreviewSession;
