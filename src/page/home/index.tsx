import { useState } from "react";
import { Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import styled from "styled-components";
import { MovieCard, Paginate } from "../../component";
import { useGetAllTrendQuery } from "../../store/movieApi";

export const Home = () => {
	const [pageNumber, setPageNumber] = useState(1);
	const { data: AllTrendyMovies, isLoading } = useGetAllTrendQuery();

	const moviesPerPage = 20;
	const TotalPages =
		Math.ceil(AllTrendyMovies?.items.length ?? 0) / moviesPerPage;

	return (
		<Container>
			{isLoading ? (
				<LoaderWrap className="d-flex align-items-center justify-content-center w-100">
					<Spinner animation="border" style={{ color: "white" }} />
				</LoaderWrap>
			) : (
				<>
					<Grid>
						{AllTrendyMovies?.items
							?.slice(
								0 + (pageNumber - 1) * moviesPerPage,
								moviesPerPage * pageNumber
							)
							.map((item: any, index: number) => (
								<MovieCard key={index} image={item.image} title={item.title} />
							))}
					</Grid>

					{AllTrendyMovies?.items?.length && (
						<Paginate
							noOfPages={TotalPages}
							pageNo={pageNumber}
							setPageNumber={setPageNumber}
						/>
					)}
				</>
			)}
		</Container>
	);
};
export const LoaderWrap = styled.div`
	height: 100vh;
`;
export const Grid = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	column-gap: 20px;
	row-gap: 20px;
`;
