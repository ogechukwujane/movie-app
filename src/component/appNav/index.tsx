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
				<SearchWrap className="d-none d-sm-flex">
					<SearchIcon />
					<input placeholder="search..." />
				</SearchWrap>
				<MenuIcon
					className="d-flex d-lg-none"
					onClick={() => setShowMenu(true)}
				/>
				{showMenu && (
					<>
						<ListContainer className="d-flex d-lg-none flex-column gap-4 p-4">
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
	background: #3a3939;
	height: 9vh;
    position: sticky;
    top: 0px;
	z-index: 100;
`;
const MovieTitle = styled.p`
	font-size: ${pxToRem(26)};
	font-weight: 700;
	color: white;
`;
const ListContainer = styled.div`
	background: black;
	position: absolute;
	top: 0px;
	right: 0px;
	left: 0px;
`;
const Link = styled(NavLink)`
	text-decoration: none;
	color: #a39f9f;
	font-size: ${pxToRem(18)};
	font-weight: 500;
	cursor: pointer;
	svg {
		stroke: #a39f9f;
	}
	&.active {
		font-weight: 600;
		color: white;
		svg {
			stroke: white;
		}
	}
`;
const SearchWrap = styled.div`
	svg {
		stroke: white;
	}
	input {
		background: transparent;
		border: none;
		border-bottom: 2px solid #a39f9f;
		color: white;
		outline: none;
	}
`;
const ExitWrap = styled.div`
	position: absolute;
	right: 32px;
	svg {
		fill: white;
		border: 2px solid white;
		border-radius: 5px;
	}
`;
