import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";
import { ReactComponent as TrendIcon } from "../../images/trendIcon.svg";
import { ReactComponent as MovieIcon } from "../../images/movieIcon.svg";
import { ReactComponent as TvIcon } from "../../images/tvIcon.svg";
import { ReactComponent as SearchIcon } from "../../images/searchIcon.svg";
import { ReactComponent as MenuIcon } from "../../images/menu_icon.svg";
import { ReactComponent as ExitIcon } from "../../images/exit_icon.svg";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { colors } from "../colors";

export const AppNav = () => {
	const [showMenu, setShowMenu] = useState(false);

	const menuList = [
		{
			name: "Trending",
			icon: TrendIcon,
			link: "/",
		},
		{
			name: "Movies",
			icon: MovieIcon,
			link: "/movies",
		},
		{
			name: "TV Series",
			icon: TvIcon,
			link: "/tv-series",
		},
		{
			name: "Search",
			icon: SearchIcon,
			link: "/search",
		},
	];

	return (
		<Wrapper className="d-flex align-items-center">
			<Container className="d-flex align-items-center justify-content-between">
				<div className="d-flex align-items-center gap-4">
					<MovieTitle>MoviesHub</MovieTitle>
					<div className="d-none d-lg-flex gap-4">
						{menuList.map((item, index) => {
							const Icon = item.icon;
							return (
								<Link
									key={index}
									to={item.link}
									className="d-flex align-items-center "
								>
									<Icon />
									<p>{item.name}</p>
								</Link>
							);
						})}
					</div>
				</div>
				<MenuIcon
					className="d-flex d-lg-none"
					onClick={() => setShowMenu(true)}
				/>
				{showMenu && (
					<>
						<ListContainer
							showMenu={showMenu}
							className="d-flex d-lg-none flex-column gap-4 p-4"
						>
							<ExitWrap onClick={() => setShowMenu(false)}>
								<ExitIcon />
							</ExitWrap>
							{menuList.map((item, index) => {
								const Icon = item.icon;
								return (
									<Link
										key={index}
										to={item.link}
										className="d-flex align-items-center "
										onClick={() => setShowMenu(false)}
									>
										<Icon />
										<p>{item.name}</p>
									</Link>
								);
							})}
						</ListContainer>
					</>
				)}
			</Container>
		</Wrapper>
	);
};
const Wrapper = styled.div`
	background:${colors.darkGray};
	box-shadow: 0px 0px 0px 2px rgba(61, 60, 60, 0.75);
	height: 9vh;
	position: sticky;
	top: 0px;
	z-index: 100;
`;
const MovieTitle = styled.p`
	font-size: ${pxToRem(26)};
	font-weight: 700;
	color: ${colors.white};
`;
const ListContainer = styled.div<{ showMenu: boolean }>`
	background: ${colors.black};
	box-shadow: 0px 0px 2px 2px rgba(125, 77, 77, 0.75);
	position: absolute;
	top: 0px;
	right: 0px;
	left: 0px;
	animation: fadeInOut 0.7s ease-in-out;
	animation-name: ${({ showMenu }) => (showMenu ? "fadeIn" : "fadeOut")};
	animation-duration: 0.3s;
	animation-timing-function: ease-in-out;
	@keyframes fadeIn {
		from {
			top: -100px;
		}
		to {
			top: 0px;
		}
	}
	@keyframes fadeOut {
		from {
			top: 0px;
		}
		to {
			top: -2000px;
		}
	}
`;
const Link = styled(NavLink)`
	text-decoration: none;
	color: ${colors.ash};
	font-size: ${pxToRem(18)};
	font-weight: 500;

	cursor: pointer;
	&:hover {
		color: ${colors.ash};
	}
	svg {
		stroke:  ${colors.ash};
	}
	&.active {
		font-weight: 600;
		color: ${colors.white};
		svg {
			stroke: ${colors.white};
		}
	}
`;
const ExitWrap = styled.div`
	position: absolute;
	right: 32px;
	svg {
		fill: ${colors.white};
		border: 2px solid ${colors.white};
		border-radius: 5px;
	}
`;
