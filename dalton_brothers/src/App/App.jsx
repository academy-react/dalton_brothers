import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Authenticated } from "./Auth/Authenticated";
import { UnAuthenticated } from "./Auth/UnAuthenticated";

const App = () => {
  const token = useSelector((state) => state.token.token);
  return <>{token ? <Authenticated /> : <UnAuthenticated />}</>;
};

export default App;
