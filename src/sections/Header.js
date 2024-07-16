// src/components/Header.js
import theme from "../themes/theme";
import SwitchButtons from "../components/common/SwitchButtons";
import { useDispatch } from "react-redux";
import { setCurrentTab } from "../redux/actions";

function Header() {
    const dispatch = useDispatch();
    
    return (
        <div
            style={{
                display: 'flex',
                position: 'relative',
                alignItems: 'center',
                padding: '18px 20px',
            }}
        >
            <h1 style={{ color: theme.colors.primary, fontSize: '16px', fontWeight: '700' }}>
                Cropper
            </h1>

            <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                <SwitchButtons 
                    buttons={[
                        { text: "Preview Session", value: "preview" },
                        { text: "Generate Session", value: "generate" },
                    ]}
                    updateButton={(tab) => dispatch(setCurrentTab(tab))}
                />
            </div>
        </div>
    )
}

export default Header;
