import React, { useState } from 'react';
//import Navbar from './post/Navbar';
import Sidebar from './post/Sidebar';
import Footer from './post/Footer';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <Navbar toggle={toggle} /> */}
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
