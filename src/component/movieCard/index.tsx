import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";

export const MovieCard = () => {
	return (
		<Container>
			<ImageWrap className="m-3"></ImageWrap>
			<TextWrap className="m-3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</TextWrap>
		</Container>
	);
};

const Container = styled.div`
	background: green;
	border-radius: 10px;
	width: calc(25% - 15px);
	@media (max-width: 1024px) {
		width: calc(33.33% - 14px);
	}
	@media (max-width: 768px) {
		width: calc(50% - 10px);
	}
	@media (max-width: 600px) {
		width: calc(100%);
	}
	&:hover {
		transform: scale(1.004);
	}
`;
const ImageWrap = styled.div`
	background: red;
	height: 320px;
	border-radius: 5px;
	overflow: hidden;
	img {
		width: 100%;
	}
`;
const TextWrap = styled.div`
	font-size: ${pxToRem(18)};
	font-weight: 500;
	text-align: center;
	color: white;
`;
