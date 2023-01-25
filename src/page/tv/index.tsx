import { useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { MovieCard, Paginate } from "../../component";
import { useGetAllTvsQuery } from "../../store/movieApi";
import { Grid, LoaderWrap } from "../home";

export const TVSeries = () => {
	const [pageNumber, setPageNumber] = useState(1);
	const { data: AllTvs, isLoading } = useGetAllTvsQuery();

	const moviesPerPage = 20;
	const TotalPages = Math.ceil(AllTvs?.items.length ?? 0) / moviesPerPage;
	return (
		<Container>
			{isLoading ? (
				<LoaderWrap className="d-flex align-items-center justify-content-center w-100">
				<Spinner animation="border" style={{color: "white"}}/>
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
