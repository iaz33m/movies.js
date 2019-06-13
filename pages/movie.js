import { withRouter } from 'next/router';
import _ from 'lodash';
import MainLayout from '../layouts/main-layout';
import PostListItem from '../components/Post/PostListItem';
import posts from '../data/posts'

const Movie = (props) => {
    
    const {slug} = props.router.query;
    let post = _.find(posts, {slug});

    if(!post){
        return  <MainLayout><p>404 - Movie Not Found</p></MainLayout>
    }

    return (
        <MainLayout>
            <h1>Movie</h1>
            <hr/>
            <div className="row">
                <PostListItem post={post}/>
            </div>
        </MainLayout>
    );
};


export default withRouter(Movie);