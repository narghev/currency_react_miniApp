import React from 'react';

import Flags from './components/flags';

const currencies = ['USD', 'EUR', 'JPY', 'GBP'];

class App extends React.Component {
  render() {
    return (
      <div className="App">
	<Flags currencies={currencies} />
      </div>
    );
  }
}

export default App;
