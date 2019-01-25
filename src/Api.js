import React, { Component } from 'react';

class App extends Component {
  state = {
    data: []
  };

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url = "https://randomuser.me/api/";

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result.results[0].name
        })
      });
  }

  render() {
    const { data } = this.state;
    const result = Object.values(data).map((entry, index) => {
      return <li key={index}>{entry}</li>;
    });

    return <ul>{result}</ul>;
  }
}

export default App;