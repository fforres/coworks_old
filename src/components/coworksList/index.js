import __fetch from "isomorphic-fetch";
import React from "react";
import InlineCss from "react-inline-css";
import Transmit from "react-transmit";
import Cowork from "../cowork";

class CoworksList extends React.Component {
  componentWillMount () {

  }
  render () {
    return(
      <div className="app" stylesheet={CoworksList.css()} namespace="CoworksList">
        <div className="coworks">
          <Cowork/>
        </div>
      </div>
    )
  }

  static css () {
		return (`
      & {
				padding-left: 10px;
				padding-right: 10px;
				position: absolute;
				background:grey;
				height:100%;
				width:50%;
				z-index:100;
				color: green;
			}
		`);
	}
}

export default Transmit.createContainer(CoworksList);
