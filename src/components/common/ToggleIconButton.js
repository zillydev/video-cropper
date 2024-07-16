// src/components/common/ToggleIconButton.js
function ToggleIconButton({ icon, iconDisabled, onClick, isActive, sx }) {
    return (
        <div
            style={{
                display: "flex",
                cursor: "pointer",
                ...sx,
            }}
            onClick={onClick}
        >
            {isActive ? icon : iconDisabled}
        </div>
    );
}

export default ToggleIconButton;
