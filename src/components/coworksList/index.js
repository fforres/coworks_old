import __fetch from "isomorphic-fetch";
import React from "react";
import InlineCss from "react-inline-css";
import Transmit from "react-transmit";
import Cowork from "../cowork";

class CoworksList extends React.Component {
  componentWillMount () {
    if (__SERVER__) {
      this.props.transmit.variables.coworks = [{
        "key":0,
        "name":"asd",
        "title":1
      },{
        "key":1,
        "name":"qwe",
        "title":2
      },{
        "key":2,
        "name":"zxc",
        "title":3
      }];
    }
    if (__CLIENT__) {
      this.props.transmit.variables.coworks = [{
        "key":0,
        "name":"123",
        "title":1
      },{
        "key":1,
        "name":"456",
        "title":2
      },{
        "key":2,
        "name":"789",
        "title":3
      }];
      console.log("CLIENT");
      console.log(this.props);
    }
    console.log(this.props);
  }
  clickedCoworkSpace (e){
    debugger;
    console.log(e)
  }
  render () {
    return(
      <div className="app" stylesheet={CoworksList.css()} namespace="CoworksList">
        <div className="coworks">
          {this.props.transmit.variables.coworks.map((el,i,as)=>{
            return <Cowork {...el} onClick={this.props.transmit.variables.onClick()}/>
          })}
        </div>
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

export default Transmit.createContainer(CoworksList,{
  initialVariables:{
    coworks:[]
  }
});
