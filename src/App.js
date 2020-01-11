import React, { Component } from 'react';
import RubberDucks from './components/RubberDucks';

class App extends Component {
  state = {
    rubberDucks: []
  }

  componentDidMount() {
    fetch('api/rubberDucks')
    .then(res => res.json())
    .then((data) => {
      this.setState({ rubberDucks: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <RubberDucks rubberDucks={this.state.rubberDucks} />
    );
  }
}

export default App;