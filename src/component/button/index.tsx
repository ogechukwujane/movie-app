import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";
import { colors } from "../colors";

export const CustomButton = ({
	btnText,
	delayTime,
	isActive
}: {
	btnText: string;
	delayTime: number;
	isActive: boolean;
}) => {
	return <Button isActive={isActive} delayTime={delayTime}>{btnText}</Button>;
};

const Button = styled.button<{ delayTime: number; isActive:boolean }>`
	font-size: ${pxToRem(16)};
	font-weight: 500;
	color: ${colors.white};
	background: ${colors.gray};
	padding: 5px 10px;
	border-radius: 5px;
	box-shadow: 1px 1px 2px 1px #4e4646;
	border: none;
	position: relative;
	display: ${(props) => (props.isActive ? 'block' : 'none')};
	animation: slideInFromBottom 0.3s ease-in-out;
	@keyframes slideInFromBottom {
		0% {
			transform: translateY(50px);
			opacity:0;
		}
		100% {
			transform: translateY(0px);
			opacity:1;
		}
	}
`;
