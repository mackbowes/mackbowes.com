import React, { useState, Component } from 'react'
import styles from '../styles/workaccordion.module.css'

class WorkAccordion extends Component {
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
    <aside className={styles.resumeBlock}>
      <div onClick={this.handleClick} style={{cursor: `pointer`}}>
      <h3>{this.props.title} - {this.props.time}</h3>
      <h4>
      Role: {this.props.role}
      </h4>
      </div>
      <div style={{opacity: this.state.opacity, transition: `all 0.25s ease-in-out 0s, transform 0s ease 0.20s`, transformOrigin: `top`, maxHeight: `${this.state.height}`, transform: `scaleX(${this.state.opacity})` }}>
      <ul className={styles.flatUl}>
        {(this.props.highlight1)
          ? <li>&rarr; {this.props.highlight1}</li>
          : '' }
        {(this.props.highlight2)
          ? <li>&rarr; {this.props.highlight2}</li>
          : '' }
        {(this.props.highlight3)
          ? <li>&rarr; {this.props.highlight3}</li>
          : '' }
        {(this.props.highlight4)
          ? <li>&rarr; {this.props.highlight4}</li>
          : '' }
      </ul>
      <p>{this.props.about}</p>
      </div>
    </aside>
  )}
}

export default WorkAccordion
