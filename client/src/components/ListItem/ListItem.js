import React, { Component } from "react";
import io from 'socket.io-client';
const socket = io();

const playersArray = [];

class ListItem extends Component {

  componentDidMount() {
    console.log('listitem mounted');
    socket.on('room', data => {
      console.log('ListItem.js socket.on(`room`)')
      data.map(player => {
        if (playersArray.indexOf(player) === -1) {
          playersArray.push(player);
        }
      })
    })
  };

  render() {
    return(
        <li className="list-group-item">
          {/* {props.children} */}
          {playersArray.forEach(function(thisPlayer) {
            <li>{thisPlayer}</li>
          })}
        </li>
    )
  }
  
}


// export const ListItem = props => (
// );

export default ListItem;