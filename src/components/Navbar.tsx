import { ReactElement } from "react";

import "./Navbar.css";

export function Navbar(): ReactElement {
    return (
      <nav className="navbar">
        <span className="material-symbols-outlined"> chevron_left </span>
        <span>Playlist - Moody</span>
        <span className="material-symbols-outlined">more_vert</span>
      </nav>
    );
  }