import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faMapMarkerAlt);

export default function Hero(props) {
  return (
    <div className="Section-hero">
      <div className="card">
        {/* <img className="card-img" src={props.img} /> */}
        <img className="card-img" src={props.imageUrl} />
        <div className="Hero-rightside">
          <div className="location">
            <div className="location-name">
              <FontAwesomeIcon
                icon="map-marker-alt"
                className="icon-location"
              />
              <p className="country">{props.location}</p>
            </div>
            <a
              className="url-location"
              href={props.googleMapsUrl}
              target="blank"
            >
              View on Google Maps
            </a>
          </div>
          <h1 className="title">{props.title}</h1>
          <p className="date">
            {props.startDate} - {props.endDate}
          </p>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
