import React from 'react';
import Cookies from 'cookies-js';

export default class MyInvitation extends React.Component {
  cookieName = 'rsvp';

  defaultRsvp = `Tell us:
- Who's coming?
- Do have any dietary requirements?
- Any other relevant information you want us to know?`;

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
      <div className="invitation">
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
            </div>
          </div>

          <div className="row order-of-service">
            <div className="six columns">
              <h3>Day</h3>
              <p>Arrive at the Chapel at 1pm</p>
              <hr/>
              <p>Drinks reception & jazz</p>
              <hr />
              <p>Wedding breakfast in the Ratcliffe Room</p>
            </div>

            <div className="six columns">
              <h3>Evening</h3>
              <div className="evening">
                <p>Arrive at the Ratcliffe Room at 7.30pm</p>
                <hr />
                <p>Canapés, drinks, casino & live music</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="twelve columns night-before">
              <p>The night before the wedding we have booked the Mackaness Room for some informal drinks; you would be more than welcome to join us.</p>
            </div>
          </div>

          <div className="row">
            <div className="twelve columns">
              <h2>RSVP</h2>

              <p>Please use the box below to RSVP:</p>

              <form className="rsvp" onSubmit={this.onSubmit}>
                <p><textarea name="rsvp" rows={10} cols={30} value={this.state.rsvp} onChange={this.onRsvpChange} placeholder={this.defaultRsvp}/></p>
                <p><button type="submit">{this.state.loading ? <img src="/loading.svg" width="30px" style={{padding: "3px 0"}} /> : 'Submit'}</button></p>
                {this.state.error && <p className="error">Oops, we couldn't process your RSVP! Please try again.</p>}
                {this.state.success && <p className="success">Thanks for your RSVP! If you forgot something, just update the text and click 'Submit' again.</p>}
              </form>


            </div>
          </div>
        </div>
      </div>
    );
  }
}
