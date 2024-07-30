import { ReactElement } from "react";
import { Navbar } from "./components/Navbar";
import { GridContainer } from "./components/GridContainer";
import "./App.css";

export function App(): ReactElement {

  return (
    <>
      <div id="wrapper">
        <Navbar />
        <GridContainer />
      </div>
    </>
  );
}

