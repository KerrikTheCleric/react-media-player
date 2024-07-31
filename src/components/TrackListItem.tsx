import { ReactElement } from "react";
import { ITrackMenuItem } from "../interfaces";

import "./TrackListItem.css";

export function TrackListItem(item: ITrackMenuItem): ReactElement {

    /*Unused, should be modified to take functionality from GridContainer*/

    return (
        <h1>{item.artist}</h1>
    );
}