import { MainRoute } from "./routes/MainRoute";
import { useState } from "react";
import { BreadcrumbsContext } from "./context/BreadCrumbsContext";

function App() {
  const [crumbs, setCrumbs] = useState([]);

  return (
    <BreadcrumbsContext.Provider value={{ crumbs, setCrumbs }}>
      <MainRoute />
    </BreadcrumbsContext.Provider>
  );
}

export default App;
