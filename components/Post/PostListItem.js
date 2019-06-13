import Link from 'next/link';

const PostListItem = (props) => {
    const {id,title,slug,medium_cover_image,summary} = props.post;
    const style = {
        marginBottom:'10px'
    };
    return (
        <div style={style} className="col-md-4">
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={medium_cover_image}></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{summary.substring(0, 110)}...</p>
                <Link as={`/movie/${slug}`} href={`/movie?slug=${slug}`}><a className="btn btn-primary">Learn More</a></Link>
            </div>
        </div>
      </div>
    );
};

export default PostListItem;