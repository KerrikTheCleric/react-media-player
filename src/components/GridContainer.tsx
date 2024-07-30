import { ReactElement } from "react";

import "./GridContainer.css";

export function GridContainer(): ReactElement {
    return (
        <div className="grid-container">
            <div className="item1">Header</div>
            <div className="item2">Menu</div>
            <div className="item3">Player</div>
        </div>
    );
}