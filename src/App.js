import { Route, Routes } from 'react-router-dom';
import './App.css';
import routes from './pages';
import Footer from './components/common/footer';
import Header from './components/common/header';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


const App = () => {

  const location = useLocation();
  const { pathname } = location;
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setScroll]);


  return (
    <>
      {/* {
        pathname === '/' ?
          <>
            {scroll ? <Header /> : null}
          </>
          : <Header />
      } */}

      <Routes>
        {routes.map((data, index) => (
          <Route key={index} path={data.path} element={data.component} exact />
        ))}
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
