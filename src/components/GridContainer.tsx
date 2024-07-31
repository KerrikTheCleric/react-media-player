import { ReactElement } from "react";
import { ITrackMenuItemList } from "../interfaces";
import { TrackListItem } from "./TrackListItem";
import testImage from "../assets/album_cover.png";

import "./GridContainer.css";
import "./TrackListItem.css";



export function GridContainer({ data }: ITrackMenuItemList): ReactElement {

    const listItems = data.map((track) =>
        <li className="trackListItem" key={crypto.randomUUID() }>
            <img className="list-image"
                src={track.image}
                alt={track.name}
            />
            <ul className="trackList">
                <li className="trackListItem-textItem"><b>{track.artist}</b></li>
                <li className="trackListItem-textItem">{track.name}</li>
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
                    <span className="material-symbols-outlined playerIcons-small"> add_circle </span>
                    <ul className="playerList-top-verticalTextList">
                        <span> <b>{data[0].artist}</b> </span>
                        <span> {data[0].name} </span>
                    </ul>
                    <span className="material-symbols-outlined playerIcons-small">favorite</span>
                </li>
                <li className="playerList playerList-middle">
                    {/* Seek slider taken from: https://www.geeksforgeeks.org/create-a-music-player-using-javascript/ */}
                    <div className="slider_container">
                        <div className="current-time">00:40</div>
                        <input type="range" min="1" max="100" value="20" className="seek_slider" readOnly/>
                        <div className="total-duration">03:42</div>
                    </div>
                </li>
                <li className="playerList playerList-bottom">
                    <span className="material-symbols-outlined playerIcons-small">repeat_on </span>
                    <span className="material-symbols-outlined playerIcons-big">skip_previous </span>
                    <span className="material-symbols-outlined playerIcons-big">play_circle</span>
                    <span className="material-symbols-outlined playerIcons-big">skip_next</span>
                    <span className="material-symbols-outlined playerIcons-small">shuffle</span>
                </li>
            </ul>
        </div>
    );
}