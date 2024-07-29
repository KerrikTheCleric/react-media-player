import { ReactElement } from "react";
import { Navbar} from "./components/Navbar";

export function App(): ReactElement {

  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =><li>{number}</li>);

  return (
    <>
      <Navbar/>
      <h1>This is the App component</h1>
      <ul>{listItems}</ul>
    </>
  );
}

