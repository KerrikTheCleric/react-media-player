import { ReactElement } from "react";
import { Navbar} from "./components/Navbar";
import {GridContainer} from "./components/GridContainer";

export function App(): ReactElement {

  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =><li>{number}</li>);

  return (
    <>
      <Navbar/>
      <GridContainer/>
      <h1>This is the App component</h1>
      <ul>{listItems}</ul>
    </>
  );
}

