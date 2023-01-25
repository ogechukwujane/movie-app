export interface IMovie {
	items: [
		{
			id: string;
			title: string;
			image: string;
		}
	];
	errorMessage: string;
}

export interface ISearch {
	searchType: string;
	expression: string;
	results: [
		{
			id: string;
			image: string;
			title: string;
		}
	];
	errorMessage: string;
}
