import React from 'react';
import Cookies from 'cookies-js';

export default class MyInvitation extends React.Component {
  cookieName = 'rsvp';

  defaultRsvp = `Tell us:
- Who's coming?
- Do have any dietary requirements?
- How many times have you trumped today?`;

  constructor(props) {
    super(props);

    this.state = {
      success: false,
      error: false,
      loading: false,
    };

    this.onRsvpChange = this.onRsvpChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    const rsvp = Cookies.get(this.cookieName);

    if (rsvp) {
      this.setState({ success: true, rsvp });
    }
  }

  onRsvpChange(e) {
    this.setState({ rsvp: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    this.setState({ loading: true, success: false, error: false });

    fetch('/rsvp', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: this.state.rsvp,
    }).then(res => {
      this.setState({ loading: false });

      if (res.status === 200) {
        this.setState({ success: true });
      } else {
        this.setState({ error: true });
      }
    }).catch(err => {
      console.error(err);

      this.setState({ loading: false });
      this.setState({ error: true })
    });
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
            <span className="date">Sunday 6th August 2016</span>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="twelve columns">
            <h2>My Invitation</h2>

            <p>All of the wedding celebrations will take place at Rudding Park and we will be staying in the main hotel
              there on the 5th, 6th and 7th of August.</p>

            <p>On the evening of the 5th, we have booked a large room (next to the bar) and will be there from 8pm
              onwards.
              If you would like to join us for a drink then you would be more than welcome. It’s going to be a relaxed
              social occasion.</p>

            <p>Please use the box below to RSVP:</p>

            <form className="invitation__form" onSubmit={this.onSubmit}>
              <p><textarea name="rsvp" rows={10} cols={30} value={this.state.rsvp} onChange={this.onRsvpChange} placeholder={this.defaultRsvp}/></p>
              <p><button type="submit">{this.state.loading ? <img src="/loading.svg" width="30px" style={{padding: "3px 0"}} /> : 'Submit'}</button></p>
              {this.state.error && <p className="error">Oops, we couldn't process your RSVP! Please try again.</p>}
              {this.state.success && <p className="success">Thanks for your RSVP! If you forgot something, just update the text and click 'Submit' again.</p>}
            </form>
          </div>
        </div>
      </div>
    );
  }
}