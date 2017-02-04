import React, {Component} from 'react';
import MyInvitation from './pages/MyInvitation';
import Accommodation from './pages/Accommodation';
import Venue from './pages/Venue';
import Photos from './pages/Photos';
import Gifts from './pages/Gifts';

class App extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <MyInvitation />
          <Venue />
          <Accommodation />
          <Photos />
          <Gifts />
        </div>
      </div>
    );
  }
}

export default App;
