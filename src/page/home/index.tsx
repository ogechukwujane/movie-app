import { useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { MovieCard, Paginate } from "../../component";


export const Home = () => {
	const [pageNumber, setPageNumber] = useState(1);
	return (
		<Container>
			<Grid>
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
			</Grid>
			<Paginate noOfPages={100} pageNo={1} setPageNumber={()=>setPageNumber(10)}/>
		</Container>
	);
};
const Grid = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
column-gap: 20px;
row-gap: 20px;
`