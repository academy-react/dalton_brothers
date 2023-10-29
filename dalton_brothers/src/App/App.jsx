import React, { useState } from "react";

import { Authenticated } from "./Auth/Authenticated";
import { UnAuthenticated } from "./Auth/UnAuthenticated";

const App = () => {
  const [token, setToken] = useState(true);
  return <>{token ? <Authenticated /> : <UnAuthenticated />}</>;
};

export default App;
