// src/sections/Preview.js
import theme from '../../themes/theme';
import { ReactComponent as PreviewIcon } from '../../assets/preview icon.svg';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import PreviewVideo from '../../components/PreviewVideo';

function GeneratedPreview() {
    const markers = useSelector((state) => state.ui.markers);

    useEffect(() => {
        console.log('GeneratedPreview rendered');
    });

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
                width: '100%',
                height: '100%',
                position: 'relative',
            }}
        >
            {markers.length === 0 ?
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        gap: '10px',
                        width: '178px',
                        height: '90px',
                        textAlign: 'center',
                    }}
                >
                    <PreviewIcon />
                    <div style={{ color: theme.colors.primary, fontSize: '12px', fontWeight: '700' }}>
                        Preview not available
                    </div>
                    <div style={{ color: theme.colors.secondary, fontSize: '12px', fontWeight: '500' }}>
                        Please add markers to generate preview
                    </div>
                </div>
                :
                <PreviewVideo />
            }
        </div>
    );
}

export default GeneratedPreview;
