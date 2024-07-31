import { ReactElement } from "react";
import { ITrackMenuItemList } from "../interfaces";
import { TrackListItem } from "./TrackListItem";
import testImage from "../assets/album_cover.png";

import "./GridContainer.css";
import "./TrackListItem.css";



export function GridContainer({ data }: ITrackMenuItemList): ReactElement {

    const listItems = data.map((track) =>
        <li className="trackListItem">
            <img className="list-image"
                src={track.image}
                alt={track.name}
            />
            <ul className="trackList">
                <li className="trackListItem"><b>{track.artist}</b></li>
                <li className="trackListItem"><b>{track.name}</b></li>
            </ul>

            <span className="material-symbols-outlined"> play_circle </span>
        </li>
    );


    return (

        <div className="grid-container">
            <ul className="trackList">{listItems}</ul>
            <ul className="playingDisplay">
                <img className="player-image" src={testImage} alt="Playing" />
                <li className="playerTopList">
                    <span className="material-symbols-outlined"> add_circle </span>
                    <span className="material-symbols-outlined"> play_circle </span>
                    <span className="material-symbols-outlined">favorite</span>
                </li>
                <li className="playerTopList">
                    <span className="material-symbols-outlined"> add_circle </span>
                    <span className="material-symbols-outlined"> play_circle </span>
                    <span className="material-symbols-outlined">favorite</span>
                </li>
                <li className="playerTopList">
                    <span className="material-symbols-outlined"> add_circle </span>
                    <span className="material-symbols-outlined"> play_circle </span>
                    <span className="material-symbols-outlined">favorite</span>
                    <span className="material-symbols-outlined">favorite</span>
                    <span className="material-symbols-outlined">favorite</span>
                </li>
            </ul>

            {/* <div className="item2">{data[0].name}</div> */}
        </div>
    );
}