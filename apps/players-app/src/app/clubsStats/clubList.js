import React from "react";

export class ClubList extends React.Component{
  render(){
  return(
      <div><a href={"/flashscore/"+this.props.clubID}>{this.props.clubName}</a></div>
  )
  }
}

export default ClubList;
