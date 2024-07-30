import { ReactElement } from "react";
import { ITrackMenuItemList } from "../interfaces";
import { TrackListItem } from "./TrackListItem";

import "./GridContainer.css";
import "./TrackListItem.css";



export function GridContainer({ data }: ITrackMenuItemList): ReactElement {

    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map((number) => number * 2);
    console.log(doubled);

    const listItems = data.map((track) =>
        <li className="no-bullets">{track.artist}</li>
    );


    return (

        <div className="grid-container">
             <ul>{listItems}</ul>
            <div className="item2">{data[0].name}</div>
        </div>
    );
}