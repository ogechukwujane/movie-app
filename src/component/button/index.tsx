import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";
import { colors } from "../colors";

export const CustomButton = ({
	btnText,
	delayTime,
}: {
	btnText: string;
	delayTime: number;
}) => {
	return <Button delayTime={delayTime}>{btnText}</Button>;
};

const Button = styled.button<{ delayTime: number }>`
	font-size: ${pxToRem(16)};
	font-weight: 500;
	color: ${colors.white};
	background: #2a2828;
	padding: 5px 10px;
	border-radius: 5px;
	box-shadow: 1px 1px 2px 1px #4e4646;
	border: none;
	opacity: 0px;
	position: relative;
	animation: slideInFromBottom 0.5s ease-in-out;
	animation-delay: calc(${(props) => props.delayTime}s / 10);
	@keyframes slideInFromBottom {
		from {
			bottom: -10px;
			opacity: 0;
		}
		to {
			bottom: 0px;
			opacity: 1;
		}
	}
`;
