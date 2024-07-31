import { ReactElement } from "react";
import { ITrackMenuItemList } from "../interfaces";
import { TrackListItem } from "./TrackListItem";

import "./GridContainer.css";
import "./TrackListItem.css";



export function GridContainer({ data }: ITrackMenuItemList): ReactElement {

    /*const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map((number) => number * 2);
    console.log(doubled);*/

    const listItems = data.map((track) =>
        <li className="trackListItem">
            <img className="list-image"
                src={track.image}
                alt={track.name}
            />
            <ul className="trackList">
                <li><b>{track.artist}</b></li>
                <li><b>{track.name}</b></li>
                <b>{track.name}</b>
            </ul>
            
            <span className="material-symbols-outlined"> play_circle </span>
        </li>
    );


    return (

        <div className="grid-container">
             <ul className="trackList">{listItems}</ul>
            <div className="item2">{data[0].name}</div>
        </div>
    );
}