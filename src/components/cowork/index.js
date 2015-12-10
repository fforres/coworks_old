import __fetch from "isomorphic-fetch";
import React from "react";
import InlineCss from "react-inline-css";
import Transmit from "react-transmit";

class Cowork extends React.Component {
  componentWillMount () {

  }
  render () {
    return(
      <div className="cowork" stylesheet={Cowork.css()} namespace="cowork">
        <div className="name">Vitacura</div>
        <div className="title">Asd</div>
        <div className="contact">Querty</div>
      </div>
    )
  }

  static css () {
		return (`
      & {

			}
		`);
	}
}

export default Transmit.createContainer(Cowork);
