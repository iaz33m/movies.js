import Link from 'next/link';

const Pagination = (props) => {

    const {page,hasNextPage,preFix} = props;

    const prPageClass = (page > 1) ? '':'disabled';
    const nextPageClass = (hasNextPage) ? '':'disabled';

    const nextPage = parseInt(page) + 1;
    const prePage = parseInt(page) - 1;

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
              <li className={`page-item ${prPageClass}`}>
                  <Link href={`${preFix}?page=${prePage}`}>
                    <a className="page-link">Previous</a>
                  </Link>
              </li>
              <li class="page-item active">
                <Link href={`${preFix}?page=${page}`}>
                    <a class="page-link">{page}</a>
                </Link>
              </li>
              <li className={`page-item ${nextPageClass}`}>
                  <Link href={`${preFix}?page=${nextPage}`}>
                    <a className="page-link">Next</a>
                  </Link>
              </li>
            </ul>
        </nav>
    );
};
  
  export default Pagination;