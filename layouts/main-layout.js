import Head from 'next/head';
import Navbar from './Navbar';

const MainLayout = (props) => {

  const {title} = props;

  return (
    <div>
      <Head>
        <title>{title || 'NextJs Home'}</title>
        <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css"/>
      </Head>
      <Navbar/>
      <div className="container">
        {props.children}
      </div>
    </div>
  );
};

export default MainLayout;