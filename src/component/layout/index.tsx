import { Outlet } from "react-router-dom";
import { AppNav } from "../appNav";

export const MovieAppShell = () => {
	return (
		<div>
			<AppNav />
			<div className="pt-4 pb-3">
				<Outlet />
			</div>
		</div>
	);
};
