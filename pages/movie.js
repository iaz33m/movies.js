import { withRouter } from 'next/router';
import _ from 'lodash';
import MainLayout from '../layouts/main-layout';
import MovieListItem from '../components/Movie/MovieListItem';

const Movie = (props) => {
    
    const {id} = props.router.query;

    let m = null;

    if(!m){
        return  <MainLayout><p>404 - Movie Not Found</p></MainLayout>
    }

    return (
        <MainLayout>
            <h1>Movie</h1>
            <hr/>
            <div className="row">
                <MovieListItem movie={m}/>
            </div>
        </MainLayout>
    );
};


export default withRouter(Movie);