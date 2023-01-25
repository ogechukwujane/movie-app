import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "../../api/baseUrl";
import { APIKEY } from "../../api/moviesApiKey";
import { IMovie, ISearch } from "./interface";

export const movieApi = createApi({
	reducerPath: "movieApi",
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (builder) => ({
		getAllTrend: builder.query<IMovie, void>({
			query: () => ({
				url: `/MostPopularMovies/${APIKEY}`,
				method: "GET",
			}),
		}),
		getAllMovies: builder.query<IMovie, void>({
			query: () => ({
				url: `/Top250Movies/${APIKEY}`,
				method: "GET",
			}),
		}),
		getAllTvs: builder.query<IMovie, void>({
			query: () => ({
				url: `/Top250TVs/${APIKEY}`,
				method: "GET",
			}),
		}),
		searchAll: builder.query<ISearch, string>({
			query: (query) => ({
				url: `/Search/${APIKEY}/${query}`,
				method: "GET",
			}),
		}),
		searchTitle: builder.query<ISearch, string>({
			query: (query) => ({
				url: `/SearchTitle/${APIKEY}/${query}`,
				method: "GET",
			}),
		}),
	}),
});

export const {
	useGetAllMoviesQuery,
	useGetAllTrendQuery,
	useGetAllTvsQuery,
	useSearchAllQuery,
	useSearchTitleQuery,
} = movieApi;
