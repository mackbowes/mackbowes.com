import React, { useState, Component } from 'react'
import styles from '../styles/workaccordion.module.css'

class WorkAccordion extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      opacity: 0,
      height: 0,
      visStatus: 'Show'
    }
  }
  handleClick() {
    (this.state.opacity == 1)
    ? this.setState({ opacity : 0})
    : this.setState({ opacity : 1}),
    (this.state.height == `1000vh`)
    ? this.setState({ height : 0})
    : this.setState({ height : `1000vh`}),
    (this.state.visStatus === 'Show')
    ? this.setState({ visStatus: 'Hide'})
    : this.setState({ visStatus: 'Show'})
  }
  render() {
  return(
    <aside className={styles.resumeBlock}>
      <div onClick={this.handleClick} style={{cursor: `pointer`}}>
      <h3>{this.props.title} - {this.props.time}</h3>
      <h4 style={{display: `inline-block`,marginTop: `0vmin`}}>
      Role: {this.props.role}
      </h4>
      <button style={{margin: `1vmin 0vmin 1vmin 2.5vmin`,display: `inline-block`,backgroundColor:`rgba(0,0,0,0)`, color: `var(--text)`, border: `1px solid var(--text)`, padding: `.5vmin 2.5vmin`, opacity: `0.75`}}>
      {this.state.visStatus} Details</button>
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
