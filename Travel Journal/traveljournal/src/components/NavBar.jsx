import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faGlobeAmericas,
  faGlobeAsia,
  faGlobeEurope,
  faGlobeAfrica,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faGlobe,
  faGlobeAmericas,
  faGlobeAsia,
  faGlobeEurope,
  faGlobeAfrica
);

export default function () {
  return (
    <div className="navbar">
      <FontAwesomeIcon icon="globe-africa" className="globe" />
      <p className="nav-heading">my travel journal</p>
    </div>
  );
}
