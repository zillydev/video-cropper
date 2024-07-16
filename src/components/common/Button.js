// src/components/common/Button.js
import theme from "../../themes/theme";
import styled from "styled-components";

const StyledButton = styled.div`
	background-color: ${(props) =>
		props.type === "action" ? theme.colors.buttonPrimary : theme.colors.buttonSecondary};
	color: ${theme.colors.primary};
	font-size: 14px;
	font-weight: 500;
	padding: ${(props) => (props.type === "action" ? "9px 10px" : "9px 20px")};
	border-radius: 10px;
	cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
	opacity: ${(props) => (props.disabled ? 0.5 : 1)};
	&:hover {
		background-color: ${(props) =>
			props.type === "action" ? theme.colors.buttonPrimaryHover : theme.colors.buttonSecondaryHover};
	}
`;

function Button({ text, type, onclick, disabled }) {
	return <StyledButton type={type} onClick={onclick} disabled={disabled}>
		{text}
	</StyledButton>;
}

export default Button;
