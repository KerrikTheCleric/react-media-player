import { ReactElement } from "react";
import { Navbar} from "./Navbar";
import { ITrackMenuItemList } from "../interfaces";

import "./GridContainer.css";


export function GridContainer({data}: ITrackMenuItemList): ReactElement {


    return (
        <div className="grid-container">
            <div className="item1">{data[0].artist}</div>
            <div className="item2">{data[0].name}</div>
        </div>
    );
}