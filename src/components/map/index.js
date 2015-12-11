import __fetch from "isomorphic-fetch";
import React from "react";
import InlineCss from "react-inline-css";
import Transmit from "react-transmit";

class Gmap extends React.Component {
  componentWillMount () {

  }
  render () {
    return(
      <div className="map" stylesheet={Gmap.css()} namespace="Gmap">
      </div>
    )
  }

  static css () {
		return (`
      &.map  {
			}
		`);
	}
}

export default Transmit.createContainer(Gmap);
