const API_KEY = "7b7f093d0be841ebdea051ba20e4be12";

const requests={
    originals : `discover/tv?api_key=${API_KEY}&with_networks=213`,
    actions : `discover/movie?api_key=${API_KEY}&with_genres=28`,
    trending : `trending/all/week?api_key=${API_KEY}&language=en-US`,
    ComedyMovies : `discover/movie?api_key=${API_KEY}&with_genres=35`,
    HorrorMovies : `discover/movie?api_key=${API_KEY}&with_genres=27`,
    RomanceMovies : `discover/movie?api_key=${API_KEY}&with_genres=10749`,
    Documentaries : `discover/movie?api_key=${API_KEY}&with_genres=99`    
}

export default requests;
