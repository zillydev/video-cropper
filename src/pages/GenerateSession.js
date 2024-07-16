// src/pages/GenerateSession.js
import React, { useEffect } from 'react';
import Footer from '../sections/generate/Footer';
import GeneratedPreview from '../sections/generate/GeneratedPreview';

function GenerateSession() {
    useEffect(() => {
        console.log('GenerateSession rendered');
    });

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    padding: '0px 20px',
                    height: '100%'
                }}
            >
                <GeneratedPreview />
            </div>

            <Footer />
        </div>
    );
}

export default GenerateSession;
