import React from 'react';

export default class Accordion extends React.Component {
  static defaultProps = { sections: [] };
  state = {
    sectionClicked: null
  }

  handleClickedSection(index) {
    this.setState({sectionClicked: index})
  }

  preRender() {
    console.log(this.props.sections)
    return this.props.sections.map((value, index) => {
      return (
      <li key={index}>
          <button onClick={() => this.handleClickedSection(index)}>{value.title}</button>
          {(this.state.sectionClicked === index) && <p>{value.content}</p>}
      </li>
      )}
    )
  }

  render() {
    console.log(this.state)
    return (
      <ul>
        {this.preRender()}
      </ul>
    );
  }
}