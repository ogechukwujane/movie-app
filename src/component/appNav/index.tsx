import styled from "styled-components";

export const AppNav = () => {
	return (
		<div>
			<h1>MoviesHub</h1>
			<p></p>
		</div>
	);
};
const Link = styled.p`
	padding: 8px 10px;
	margin: 0px 8px;
	display: flex;
	column-gap: 8px;
	align-items: center;
	text-decoration: none;
	border-radius: 4px;
	@media (max-width: 600px) {
		margin: 10px 5px;
	}
	svg {
		fill: white;
		stroke: white;
		width: 14px;
		height: 14px;
	}
	&.active {
		background: white;
		color: white;
		svg {
			fill: white;
			stroke: white;
		}
	}
	&:last-child {
		margin-top: 20px;
		border-radius: 0px;
		border-top: 1px solid rgba(238, 240, 243, 0.3);
	}
`;
const LinkParagraph = styled.h3`
	font-weight: 400;
`;
