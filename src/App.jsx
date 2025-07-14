import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";

function App() {
  return(
   <>
    <Breadcrumbs>
      <a href="#" className="opacity-60">
        Docs
      </a>
      <a href="#" className="opacity-60">
        Components
      </a>
      <a href="#">Breadcrumbs</a>
    </Breadcrumbs>
   </>
  );
}

export default App;
