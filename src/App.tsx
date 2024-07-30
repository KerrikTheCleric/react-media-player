import { ReactElement } from "react";
import { Navbar } from "./components/Navbar";
import { GridContainer } from "./components/GridContainer";
import "./App.css";
import { tracks } from "./data";

export function App(): ReactElement {

  return (
    <>
      <div id="wrapper">
        <Navbar />
        <GridContainer data={tracks.data} />
      </div>
    </>
  );
}

