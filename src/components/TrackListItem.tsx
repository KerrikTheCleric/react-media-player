import { ReactElement } from "react";
import { ITrackMenuItem } from "../interfaces";

import "./TrackListItem.css";

export function TrackListItem(item: ITrackMenuItem): ReactElement {


    return (
        <h1>{item.artist}</h1>
    );
}