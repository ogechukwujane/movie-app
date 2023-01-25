import { useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { MovieCard, Paginate } from "../../component";
import { useGetAllMoviesQuery } from "../../store/movieApi";
import { Grid } from "../home";

export const Movies = () => {
	const [pageNumber, setPageNumber] = useState(1);
	const { data: AllMovies, isLoading } = useGetAllMoviesQuery();

	const moviesPerPage = 20;
	const TotalPages = Math.ceil(AllMovies?.items.length ?? 0) / moviesPerPage;
	return (
		<Container>
			{isLoading ? (
				<div className="d-flex align-items-center justify-content-center w-100 h-100">
					<Spinner animation="border" />
				</div>
			) : (
				<>
					<Grid>
						{AllMovies?.items
							?.slice(
								0 + (pageNumber - 1) * moviesPerPage,
								moviesPerPage * pageNumber
							)
							.map((item: any, index: number) => (
								<MovieCard key={index} image={item.image} title={item.title} />
							))}
					</Grid>

					<Paginate
						noOfPages={TotalPages}
						pageNo={pageNumber}
						setPageNumber={setPageNumber}
					/>
				</>
			)}
		</Container>
	);
};
