import { ReactElement } from "react";
import { Navbar } from "./components/Navbar";
import { GridContainer } from "./components/GridContainer";

export function App(): ReactElement {

  return (
    <>
      <div>
        <Navbar />
        <GridContainer />
      </div>
    </>
  );
}

