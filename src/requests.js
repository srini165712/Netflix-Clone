const api_key = '8d359ef4b7cec93891ae27e31ed98f0e'

const requests = {
    fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`, 
    fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`, 
    fetchTopRated:`/movie/top_rated?api_key=${api_key}&language=en-US`, 
    fetchActionMovies:`/discover/movie?api_key=${api_key}&with_genres=28`, 
    fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`, 
    fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`, 
    fetchRomanceMovies:`/discover/movie?api_key=${api_key}&with_genres=10749`, 
    fetchDocumentaries: `/discover/movie?api_key=${api_key}&with_genres=99` 
}

export default requests;