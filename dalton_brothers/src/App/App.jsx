import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { Authenticated } from "./Auth/Authenticated";
import { UnAuthenticated } from "./Auth/UnAuthenticated";

const App = () => {
  const token = useSelector((state) => state.token.token);

  return (
    <>
      <ScrollToTop />
      {token ? (
        <Authenticated location={location} />
      ) : (
        <UnAuthenticated location={location} />
      )}
    </>
  );
};

export default App;

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};
