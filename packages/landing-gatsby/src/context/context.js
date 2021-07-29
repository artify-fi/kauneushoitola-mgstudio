import React, { useState } from 'react';
import sublinks from '../constants/links';
import shortlinks from '../constants/linksShort';

const GatsbyContext = React.createContext();

const GatsbyProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [links, setLinks] = useState(sublinks);
  const [linksShort, setLinksShort] = useState(shortlinks);

  const showSidebar = () => {
    setIsSidebarOpen(true);
  };
  const hideSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <GatsbyContext.Provider
      value={{ isSidebarOpen, links, linksShort, showSidebar, hideSidebar }}
    >
      {children}
    </GatsbyContext.Provider>
  );
};

export { GatsbyContext, GatsbyProvider };
