import React from 'react'
import "./card.css"
class Card extends React.Component {
    render() {
         
      return <div className='card'><h1>Welcome to {this.props.name}</h1><p>{this.props.body}</p></div>;
    }
  }
  export default Card