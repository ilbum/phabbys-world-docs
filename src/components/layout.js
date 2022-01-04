import * as React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="root-container-flex">
      <title>{pageTitle}</title>
      <header>
        <Navbar />
      </header>
      <div id="main-container">
        <main>
          {/* hero section */}
          <div id="hero-div">
            <h1>{pageTitle}</h1>
          </div>
          {/* content section */}
          <div id="content-div">{children}</div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
