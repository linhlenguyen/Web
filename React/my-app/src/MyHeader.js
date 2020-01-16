import React from 'react';

export default class MyHeader extends React.Component {
    render() {
      return <h1>{this.props.displayText}</h1>;
    }
}