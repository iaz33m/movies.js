import Link from 'next/link';

const renderNextPages = (page,page_count,preFix,pages) => {
  const jsx = [];
  let nextPage = page;
  for(let i = 1; i <= pages ; i++){
    nextPage++;
    const hasNextPage = (page_count >= nextPage);
    if(hasNextPage){
      jsx.push(
      <li className="page-item">
        <Link href={`${preFix}?page=${nextPage}`}>
            <a className="page-link">{nextPage}</a>
        </Link>
      </li>);
    }
  }

  return jsx;
}

const renderPreviousPages = (page,preFix,pages) => {
  const jsx = [];
  
  let prPage = (page - pages) - 1;

  for(let i = 1; i <= pages ; i++){
    prPage++;
    const hasPrPage = (prPage > 0);
    if(hasPrPage){
      jsx.push(
      <li className="page-item">
        <Link href={`${preFix}?page=${prPage}`}>
            <a className="page-link">{prPage}</a>
        </Link>
      </li>);
    }
  }

  return jsx;
}

const renderLast = (page,pages,page_count,preFix) => {
  if(page < (page_count - pages)) {
    return (
      <li className={`page-item`}>
        <Link href={`${preFix}?page=${page_count}`}>
        <a className="page-link">Last</a>
        </Link>
      </li>
    );
  }
}

const renderFrist = (page,pages,preFix) => {
  if(page > (pages + 1)) {
    return (
      <li className={`page-item`}>
        <Link href={`${preFix}?page=1`}>
        <a className="page-link">First</a>
        </Link>
      </li>
    );
  }
}

const Pagination = (props) => {

    let {page,page_count,preFix,pages} = props;
    const prPageClass = (page > 1) ? '':'disabled';
    const nextPageClass = (page_count > page) ? '':'disabled';
    page = parseInt(page);

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
              
              {renderFrist(page,pages,preFix)}

              <li className={`page-item ${prPageClass}`}>
                  <Link href={`${preFix}?page=${page-1}`}>
                    <a className="page-link">Previous</a>
                  </Link>
              </li>
              {renderPreviousPages(page,preFix,pages)}
              <li className="page-item active">
                <Link href={`${preFix}?page=${page}`}>
                    <a className="page-link">{page}</a>
                </Link>
              </li>
              {renderNextPages(page, page_count,preFix,pages)}
              <li className={`page-item ${nextPageClass}`}>
                  <Link href={`${preFix}?page=${page+1}`}>
                    <a className="page-link">Next</a>
                  </Link>
              </li>
              {renderLast(page,pages,page_count,preFix)}
            </ul>
        </nav>
    );
};
  
  export default Pagination;