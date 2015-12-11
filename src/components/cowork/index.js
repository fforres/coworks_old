import React from "react";
import InlineCss from "react-inline-css";
import Transmit from "react-transmit";

class Cowork extends React.Component {
  componentWillMount () {
  }
  render () {
    return(
      <div className="cowork" stylesheet={Cowork.css()} namespace="cowork">
        <div className="name">{this.props.name}</div>
        <div className="title">{this.props.title}</div>
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
