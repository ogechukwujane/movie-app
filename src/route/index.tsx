import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieAppShell } from "../component/layout";
import { Home, Movies, TVSeries } from "../page";

export const RouterConfig = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MovieAppShell />}>
					<Route path="/" element={<Home />} />
					<Route path="movies" element={<Movies />} />
					<Route path="tv-series" element={<TVSeries />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
