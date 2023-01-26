import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { CustomButton, MovieCard, Paginate } from "../../component";
import { useGetAllTvsQuery } from "../../store/movieApi";
import { Grid, LoaderWrap } from "../home";

export const TVSeries = () => {
	const [pageNumber, setPageNumber] = useState(1);
	const [active, setActive] = useState(0);
	const { data: AllTvs, isLoading } = useGetAllTvsQuery();

	const moviesPerPage = 20;
	const TotalPages = Math.ceil(AllTvs?.items.length ?? 0) / moviesPerPage;

	const tvList = [
		"Action & Adventure",
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
		"History",
		"Sport",
		"Music",
		"Reality-TV",
	];
	useEffect(() => {
		if (active < tvList.length) {
			let interval = setTimeout(() => {
				setActive((prev) => prev + 1);
			}, 0.05 * 1000);
			return () => clearTimeout(interval);
		}
	}, [active, tvList.length]);

	useEffect(() => {
		if (AllTvs?.errorMessage) {
			alert(AllTvs?.errorMessage);
		}
	}, [AllTvs?.errorMessage]);

	return (
		<Container>
			<div className="d-flex flex-wrap gap-3">
				{tvList.map((item: string, index: number) => (
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
						{AllTvs?.items
							?.slice(
								0 + (pageNumber - 1) * moviesPerPage,
								moviesPerPage * pageNumber
							)
							.map((item: any, index: number) => (
								<MovieCard key={index} image={item.image} title={item.title} />
							))}
					</Grid>

					{!!AllTvs?.items?.length && (
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
