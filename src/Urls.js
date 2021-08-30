import { API_KEY } from "./constants/constants";

export const orginals=`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
export const actions=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
export const comedy=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
export const drama=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18`
export const family=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10751`
export const tvShow=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10770`
export const webseries=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`