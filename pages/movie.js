import _ from 'lodash';
import fetch from 'isomorphic-unfetch';
import MainLayout from '../layouts/main-layout';
import MovieListItem from '../components/Movie/MovieListItem';

const Movie = (props) => {
    
    const {movie} = props;

    if(!movie){
        return  <MainLayout><p>404 - Movie Not Found</p></MainLayout>
    }

    return (
        <MainLayout>
            <h1>Movie</h1>
            <hr/>
            <div className="row">
                <MovieListItem movie={movie}/>
            </div>
        </MainLayout>
    );
};

Movie.getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch(`https://yts.lt/api/v2/movie_details.json?movie_id=${id}`);
    const data = await res.json();
    const {movie} = data.data;
    return {
      movie
    };
};

export default Movie;