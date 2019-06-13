import MainLayout from '../layouts/main-layout';
import PostListItem from '../components/Post/PostListItem';
import fetch from 'isomorphic-unfetch';

const Movies = (props) => {
  
  const {movies} = props;

  return (
    <MainLayout>
        <h1>Movies</h1>
        <hr/>
        <div className="row">
            {movies.map((m,i) => <PostListItem key={i} post={m}/>)}
        </div>
    </MainLayout>
  );
};

Movies.getInitialProps = async function() {
  const res = await fetch('https://yts.lt/api/v2/list_movies.json');
  const data = await res.json();
  const movies = data.data.movies;
  return {
    movies
  };
};

export default Movies;