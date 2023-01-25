import { useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { CustomButton, MovieCard, Paginate } from "../../component";
import { useGetAllMoviesQuery } from "../../store/movieApi";
import { Grid, LoaderWrap } from "../home";

export const Movies = () => {
	const [pageNumber, setPageNumber] = useState(1);
	const [showButton, setShowButton] = useState(0);
	const { data: AllMovies, isLoading } = useGetAllMoviesQuery();

	const moviesPerPage = 20;
	const TotalPages = Math.ceil(AllMovies?.items.length ?? 0) / moviesPerPage;

	const movieList = [
		"Action",
		"Adventure",
		"Animation",
		"Comedy",
		"Horror",
		"Romance",
		"Thriller",
		"Family",
		"Drama",
		"War",
		"Crime",
		"Mystery",
		"Sci-Fi",
		"Fantasy",
		"Biography",
		"History",
		"Sport",
		"Music",
		"Western",
		"Musical",
		"Documentary",
		"Short",
		"Film-Noir",
		"Adult",
		"Talk-Show",
		"Game-Show",
		"Reality-TV",
	];
	return (
		<Container>
			<div className="d-flex flex-wrap gap-3">
				{movieList.map((item: string, index: number) => (
					<>
						{/* {showButton ? ( */}
						<CustomButton key={index} btnText={item} delayTime={index} />
						{/* ) : null} */}
					</>
				))}
			</div>

			{isLoading ? (
				<LoaderWrap className="d-flex align-items-center justify-content-center w-100">
					<Spinner animation="border" style={{ color: "white" }} />
				</LoaderWrap>
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
