import React, {Component} from 'react';
import MyInvitation from './pages/MyInvitation';
import Accommodation from './pages/Accommodation';
import Venue from './pages/Venue';

class App extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div id="invitation"><MyInvitation /></div>
          <Venue />
          <Accommodation />
          {/*<div id="accommodation"><Accommodation invitation={this.props.invitation}/></div>*/}
          {/*<div id="photos"><Photos invitation={this.props.invitation}/></div>*/}
          {/*<div id="ps"><PS invitation={this.props.invitation}/></div>*/}
        </div>
      </div>
    );
  }
}

export default App;
