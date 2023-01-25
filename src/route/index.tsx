import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieAppShell } from "../component/layout";
import { Home, Movies, Search, TVSeries } from "../page";

export const RouterConfig = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MovieAppShell />}>
					<Route path="/" element={<Home />} />
					<Route path="movies" element={<Movies />} />
					<Route path="tv-series" element={<TVSeries />} />
					<Route path="search" element={<Search />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
