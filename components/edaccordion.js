import React, { useState, Component } from 'react'
import styles from '../styles/edaccordion.module.css'

class EdAccordion extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      opacity: 0,
      height: 0
    }
  }
  handleClick() {
    (this.state.opacity == 1)
    ? this.setState({ opacity : 0})
    : this.setState({ opacity : 1}),
    (this.state.height == `1000vh`)
    ? this.setState({ height : 0})
    : this.setState({ height : `1000vh`})
  }
  render() {
  return(
    <div style={{paddingRight: `5vmin`}}>
      <div onClick={this.handleClick} style={{cursor: `pointer`}}>
      <h3>{this.props.title}</h3>
      {(this.props.highlight1)
        ? <h4>{this.props.highlight1}</h4>
        : '' }
      {(this.props.highlight2)
        ? <h4>{this.props.highlight2}</h4>
        : '' }
      </div>
      <div style={{opacity: this.state.opacity, transition: `all 0.25s ease-in-out 0s, transform 0s ease 0.20s`, transformOrigin: `top`, maxHeight: `${this.state.height}`, transform: `scaleX(${this.state.opacity})` }}>
      <p style={{paddingLeft: '2.5vmin'}}>{this.props.about}</p>
      </div>
    </div>
  )}
}

export default EdAccordion
