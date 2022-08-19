const API_KEY = "b10b8032f464a84bc86441d651a0119c"

const request = {
    fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`, 
    fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
    fetchOriginals: `/discover/tv?api_key=${API_KEY}`,
    fetchTop: `/movie/top-rated?api_key=${API_KEY}`
}

export default request