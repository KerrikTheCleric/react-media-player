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
                <li className="trackListItem-textItem"><b>{track.artist}</b></li>
                <li className="trackListItem-textItem"><b>{track.name}</b></li>
            </ul>

            <span className="material-symbols-outlined"> play_circle </span>
        </li>
    );


    return (

        <div className="grid-container">
            <ul className="trackList">{listItems}</ul>
            <ul className="playingDisplay">
                <img className="player-image" src={testImage} alt="Playing" />
                <li className="playerList playerList-top">
                    <span className="material-symbols-outlined"> add_circle </span>
                    <ul className="playerList-top-verticalTextList">
                        <span> <b>{data[0].artist}</b> </span>
                        <span> {data[0].name} </span>
                    </ul>
                    <span className="material-symbols-outlined">favorite</span>
                </li>
                <li className="playerList playerList-middle">
                    <span>C Time</span>
                    <span>Slider</span>
                    <span>T Time</span>
                </li>
                <li className="playerList playerList-bottom">
                    <span className="material-symbols-outlined"> repeat_on </span>
                    <span className="material-symbols-outlined"> skip_previous </span>
                    <span className="material-symbols-outlined">play_circle</span>
                    <span className="material-symbols-outlined">skip_next</span>
                    <span className="material-symbols-outlined">shuffle</span>
                </li>
            </ul>
        </div>
    );
}