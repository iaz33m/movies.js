import MainLayout from '../layouts/main-layout';
import MovieListItem from '../components/Movie/MovieListItem';
import fetch from 'isomorphic-unfetch';

const Movies = (props) => {
  
  const {movies} = props;

  return (
    <MainLayout>
        <h1>Movies</h1>
        <hr/>
        <div className="row">
            {movies.map((m,i) => <MovieListItem key={i} movie={m}/>)}
        </div>
    </MainLayout>
  );
};

Movies.getInitialProps = async function() {
  const res = await fetch('https://yts.lt/api/v2/list_movies.json');
  const data = await res.json();
  const movies = data.data.movies;
  console.log("Total Movies",movies.length);
  return {
    movies
  };
};

export default Movies;