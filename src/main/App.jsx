import React from 'react';

import Header from '../common/Header';
import Content from '../common/Content';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
