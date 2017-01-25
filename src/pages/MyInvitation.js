import React from 'react'

export default function MyInvitation() {
  return (
    <div className="container">
      <div className="row invitation__greeting">
        <div className="twelve columns">
          <span className="text-blue">Beautiful Bride</span><br/>
          <span className="text-green">Handsome Groom</span><br/>
          <span className="text-yellow">Booze, food &amp; bad dance moves</span><br/>
          <span className="text-red"><strong>You in or what?</strong></span><br/>
          <span className="date">Sunday 6th August 2016</span>
        </div>
      </div>
      <hr/>
      <RSVP />
    </div>
  );
}

const RSVP = () => (
  <div className="row">
    <div className="twelve columns">
      <h2>RSVP</h2>

      <h3 className="text--center">
        <a className="text-blue text-hover--green" href="https://www.ruddingpark.co.uk/" target="_black">
          Rudding Park Hotel
        </a>
      </h3>
    </div>

    <div className="twelve columns dodford-layout">
      <img src="/dodford.png"/>
    </div>
  </div>
);

function Venue() {
  return (
    <div className="row">
      <div className="twelve columns">
        <h2>Venue</h2>

        <h3 className="text--center">
          <a className="text-blue text-hover--green" href="https://www.ruddingpark.co.uk/" target="_black">
            Rudding Park Hotel
          </a>
        </h3>
      </div>

      <div className="twelve columns dodford-layout">
        <img src="/dodford.png"/>
      </div>
    </div>
  );
}

/*class MyInvitation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row invitation__greeting">
                    <div className="twelve columns">
                        <span className="text-blue">Beautiful Bride</span><br/>
                        <span className="text-green">Handsome Groom</span><br/>
                        <span className="text-yellow">Booze, food &amp; bad dance moves</span><br/>
                        <span className="text-red"><strong>You in or what?</strong></span><br/>
                        <span className="date">Monday 21st September 2015</span>
                    </div>
                </div>
                <hr/>
                <div className="row invitation__rsvp">
                    <div className="twelve columns">
                        <h2>My Invitation</h2>
                    </div>
                    <div className="twelve columns">
                        <p>Welcome to your invitation to our wedding! There's a few things for you to fill in. Everything will
                        be saved automatically as you go - a notification will appear to let you know
                        your changes have been saved. Once you've filled everything in you can close the window. Please come back any time
                        for information and if you need any help get in touch!</p>
                        <p className="text--center">We can't wait to see you,</p>
                        <p className="text--center">Sarah &amp; Ross xx</p>
                    </div>
                </div>
                <hr/>
                <RSVP invitation={this.props.invitation}/>
                <hr/>
                <Arrival invitation={this.props.invitation}/>
                <hr/>
                <Venue invitation={this.props.invitation}/>
                <hr/>
                <Food invitation={this.props.invitation}/>
            </div>
        );
    }
}*/
