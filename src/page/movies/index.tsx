import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { CustomButton, MovieCard, Paginate } from "../../component";
import { useGetAllMoviesQuery } from "../../store/movieApi";
import { Grid, LoaderWrap } from "../home";

export const Movies = () => {
	const [pageNumber, setPageNumber] = useState(1);
	const [active, setActive] = useState(0);
	const { data: AllMovies, isLoading} = useGetAllMoviesQuery();

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
		"Fantasy",
		"Music",
		
	];
	useEffect(() => {
		if(active < movieList.length){
			let interval = setTimeout(() => {
				setActive((prev) => prev + 1);
			},  0.05 * 1000);
			return () => clearTimeout(interval)
		}
	}, [active, movieList.length]);

	useEffect(()=>{
		if(AllMovies?.errorMessage){
			alert(AllMovies?.errorMessage)
		}
	},[AllMovies?.errorMessage])
	

	return (
		<Container>
			<div className="d-flex flex-wrap gap-3">
				{movieList.map((item: string, index: number) => (
					<CustomButton
						key={index}
						btnText={item}
						delayTime={index}
						isActive={active >= index}
					/>
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

					{!!AllMovies?.items?.length && (
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
