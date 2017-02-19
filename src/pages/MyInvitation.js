import React from 'react';
import EmailForm from '../EmailForm';

const  defaultRsvp = `Tell us:
- Who's coming?
- Do have any dietary requirements?
- Any other relevant information you want us to know?`;


const MyInvitation = () => (
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

          <EmailForm action="/rsvp" placeholder={defaultRsvp} cookieName="rsvp" />
        </div>
      </div>
    </div>
  </div>
);

export default MyInvitation;
