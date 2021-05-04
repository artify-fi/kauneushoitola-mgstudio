import React, { useContext } from 'react';
import theme from './Theme';
import { ThemeProvider } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Header from './navbar/Navbar';
import Footer from './footer/Footer';
import Sidebar from './sidebar/Sidebar';
import { GatsbyContext } from '../context/context';
import { DrawerProvider } from '../../../common/src/contexts/DrawerContext';
import Sticky from 'react-stickynode';
import '../css/main.css';

import Yhteydenotto from '../containers/AppModern/FooterMap';
import MyMap from '../components/leaflet/Leaflet';

const location = {
  address: 'MG Studio Tuohiaukio 4, 00410, Helsinki, Malminkartano.',
  lat: 60.25154,
  lng: 24.85796,
};

const Layout = ({ children }) => {
  const { isSidebarOpen } = useContext(GatsbyContext);
  return (
    <ThemeProvider theme={theme}>
      <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
        <DrawerProvider>
          <Header />
        </DrawerProvider>
      </Sticky>
      {isSidebarOpen && <Sidebar />}
      {children}
      <Yhteydenotto />
      <MyMap />
      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
