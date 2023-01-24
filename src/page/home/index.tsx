import { Container } from "react-bootstrap";
import styled from "styled-components";
import { MovieCard } from "../../component";


export const Home = () => {
	return (
		<Container>
			<Grid>
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
			</Grid>
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