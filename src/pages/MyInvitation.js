import React from 'react';
import Cookies from 'cookies-js';

import './MyInvitation.scss';

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
      <div>
        <div className="banner">
          <div className="banner__text-wrapper">
            <h1>Ben and Rebecca</h1>
            <h2>06.08.17</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="twelve columns">
              <h2>My Invitation</h2>
              <p>Please use the box below to RSVP:</p>

              <form className="invitation__rsvp" onSubmit={this.onSubmit}>
                <p><textarea name="rsvp" rows={10} cols={30} value={this.state.rsvp} onChange={this.onRsvpChange} placeholder={this.defaultRsvp}/></p>
                <p><button type="submit">{this.state.loading ? <img src="/loading.svg" width="30px" style={{padding: "3px 0"}} /> : 'Submit'}</button></p>
                {this.state.error && <p className="error">Oops, we couldn't process your RSVP! Please try again.</p>}
                {this.state.success && <p className="success">Thanks for your RSVP! If you forgot something, just update the text and click 'Submit' again.</p>}
              </form>

              <p>All wedding celebrations will take place at Rudding Park in the main hotel. The night before the wedding,
                we have booked the Mackaness Room for some informal drinks, and you would be more than welcome to join us.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}