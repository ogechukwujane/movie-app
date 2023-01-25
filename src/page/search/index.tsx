import { useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import styled from "styled-components";
import { colors, MovieCard, Paginate } from "../../component";
import { useSearchAllQuery, useSearchTitleQuery } from "../../store/movieApi";
import { LoaderWrap, Grid } from "../home";

export const Search = () => {
	const [pageNumber, setPageNumber] = useState(1);
	const [holdData, setholdData] = useState("");
	const [search, setSearch] = useState("");
	const { data: AllSearchMovies, isLoading } = useSearchAllQuery(search);
	const { data: AllListSearchMovies, isLoading: isLoadingListSearch } = useSearchTitleQuery(search);

	const moviesPerPage = 20;
	const TotalPages =
		Math.ceil(AllSearchMovies?.results?.length ?? 0) / moviesPerPage;
	const TotalListPages =
		Math.ceil(AllListSearchMovies?.results?.length ?? 0) / moviesPerPage;

	const handleSearch = (e: any) => {
		setholdData(e.target.value);
	};
	return (
		<Container>
			<SearchWrap className="d-flex gap-2">
				<input placeholder="search movies" onChange={handleSearch} />{" "}
				<button onClick={() => setSearch(holdData)}>Search</button>
			</SearchWrap>

			{isLoading || isLoadingListSearch ? (
				<LoaderWrap className="d-flex align-items-center justify-content-center w-100">
					<Spinner animation="border" style={{ color: "white" }} />
				</LoaderWrap>
			) : (
				<>
					<Grid>
						{AllSearchMovies?.results?.length
							? AllSearchMovies?.results
									?.slice(
										0 + (pageNumber - 1) * moviesPerPage,
										moviesPerPage * pageNumber
									)
									.map((item: any, index: number) => (
										<MovieCard
											key={index}
											image={item.image}
											title={item.title}
										/>
									))
							: AllListSearchMovies?.results
									?.slice(
										0 + (pageNumber - 1) * moviesPerPage,
										moviesPerPage * pageNumber
									)
									.map((item: any, index: number) => (
										<MovieCard
											key={index}
											image={item.image}
											title={item.title}
										/>
									))}
					</Grid>

					{AllSearchMovies?.results?.length ||
					AllListSearchMovies?.results?.length ? (
						<Paginate
							noOfPages={TotalPages || TotalListPages}
							pageNo={pageNumber}
							setPageNumber={setPageNumber}
						/>
					) : null}
				</>
			)}
		</Container>
	);
};

const SearchWrap = styled.div`
	position: relative;
	animation: fallDown 0.8s ease-in-out;
	@keyframes fallDown {
		from {
			top: -70px;
			scale: 0;
		}
		to {
			top: 0px;
			scale: 1;
		}
	}
	input {
		padding: 8px 10px;
		border: none;
		border-radius: 5px;
		width: 40%;
		background: ${colors.darkGray};
		color: ${colors.white};
		@media (max-width: 768px) {
			width: 100%;
		}
	}
	button {
		padding: 8px 10px;
		border: none;
		background: ${colors.red};
		border-radius: 5px;
		font-weight: 600;
		color: ${colors.white};
	}
`;
