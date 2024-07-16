// src/components/common/SwitchButtons.js
import { useState } from "react";
import theme from "../../themes/theme";

function SwitchButtons({ buttons, updateButton }) {
    const [activeButton, setActiveButton] = useState(0);

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                color: theme.colors.primary,
                backgroundColor: theme.colors.buttonSecondary,
                width: "100%",
                borderRadius: "6px",
            }}
        >
            {buttons.map((button, index) => (
                <div
                    key={index}
                    style={{
                        backgroundColor: activeButton === index ? theme.colors.background : "transparent",
                        padding: `${activeButton === index ? "9px 20px" : "9px"}`,
                        margin: `${activeButton === index ? "3px" : "0px"} ${activeButton === index ? "3px" : "0"}`,
                        transition: "0.1s linear",
                        borderRadius: "6px",
                        cursor: "pointer",
                    }}
                    onClick={() => {
                        setActiveButton(index);
                        updateButton(button.value);
                    }}
                >
                    {button.text}
                </div>
            ))}
        </div>
    );
}

export default SwitchButtons;
