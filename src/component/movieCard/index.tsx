import styled, { keyframes } from "styled-components";
import { pxToRem } from "../../utils/pxToRem";

export const MovieCard = ({
	title,
	image,
	...prop
}: {
	title: string;
	image: string;
}) => {
	return (
		<Container {...prop}>
			<ImageWrap className="m-3">
				<img src={image} alt="movie" />
			</ImageWrap>
			<TextWrap className="m-3">{title}</TextWrap>
		</Container>
	);
};
const fadeIn = keyframes`
		0%{
			scale: 0;
		}
		100% {
			scale: 1;
		}
`;
const Container = styled.div`
	background: #151515;
	box-shadow: 1px 1px 6px 2px rgba(220, 146, 146, 0.3);
	border-radius: 10px;
	width: calc(25% - 15px);
	animation: ${fadeIn} 0.5s ease-in-out;

	@media (max-width: 1024px) {
		width: calc(33.33% - 14px);
	}
	@media (max-width: 768px) {
		width: calc(50% - 10px);
	}
	@media (max-width: 600px) {
		width: calc(100%);
	}
	transition: transform 0.3s ease-in-out;
	&:hover {
		transform: scale(1.03);
	}
`;
const ImageWrap = styled.div`
	background: black;
	height: 320px;
	border-radius: 5px;
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
	}
`;
const TextWrap = styled.div`
	font-size: ${pxToRem(18)};
	font-weight: 600;
	text-align: center;
	color: white;
`;
