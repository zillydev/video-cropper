// src/components/common/Dropdown.js
import React, { useState } from "react";
import theme from "../../themes/theme";
import styled from "styled-components";

const StyledDropdown = styled.div`
    background: ${theme.colors.background};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.buttonSecondary};
    border-radius: 10px;
    flex-direction: column;
    position: absolute;
    top: 115%;
    left: 0;
    width: 100%;
    max-height: 125px;
    box-sizing: border-box;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 0.5em;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #7f8087;
        border-radius: 2px;
    }
`;

const StyledDropdownOption = styled.div`
    padding: 9px 20px;
    display: flex;
    cursor: pointer;
    &:hover {
        background: ${theme.colors.buttonSecondary};
    }
`;

function Dropdown({ options, selected, text, icon, onOptionSelect }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(selected);

    return (
        <div
            style={{
                color: theme.colors.primary,
                fontSize: "12px",
                fontWeight: "400",
                padding: "7px 10px",
                border: `1px solid ${theme.colors.buttonSecondary}`,
                borderRadius: "5px",
                display: "flex",
                gap: "5px",
                alignItems: "center",
                position: "relative",
                cursor: "pointer",
            }}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div>
                {text}
                <span style={{ color: theme.colors.secondary, marginLeft: "3px" }}>{selectedOption.text}</span>
            </div>
            {icon}

            {isOpen && (
                <StyledDropdown>
                    {options.map((option, index) => (
                        <StyledDropdownOption
                            key={index}
                            onClick={() => {
                                setSelectedOption(option);
                                setIsOpen(false);
                                onOptionSelect(option);
                            }}
                        >
                            {option.text}
                        </StyledDropdownOption>
                    ))}
                </StyledDropdown>
            )}
        </div>
    );
};

export default Dropdown;
