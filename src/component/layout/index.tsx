import { Outlet } from "react-router-dom";
import { AppNav } from "../appNav";

export const MovieAppShell = () => {
	return (
		<div>
			<AppNav />
			<Outlet />
		</div>
	);
};
