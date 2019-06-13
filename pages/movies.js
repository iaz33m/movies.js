import MainLayout from '../layouts/main-layout';
import MovieListItem from '../components/Movie/MovieListItem';
import Pagination from '../components/Common/Pagination';
import fetch from 'isomorphic-unfetch';

const Movies = (props) => {
  
  const {movies,hasNextPage,page} = props;

  return (
    <MainLayout>
        <h1>Movies</h1>
        <hr/>
        <div className="row">
            {movies.map((m,i) => <MovieListItem key={i} movie={m}/>)}
        </div>

        <Pagination hasNextPage={hasNextPage} page={page} preFix="/movies"/>
        
    </MainLayout>
  );
};

Movies.getInitialProps = async function(context) {
  const page = context.query.page || 1;
  const limit = 12;
  const res = await fetch(`https://yts.lt/api/v2/list_movies.json?limit=${limit}&page=${page}`);
  const data = await res.json();
  const {movies,movie_count} = data.data;
  const hasNextPage = (limit * page) <= movie_count;
  return {
    movies,
    hasNextPage,
    page
  };
};

export default Movies;