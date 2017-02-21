import React from 'react';
import EmailForm from '../EmailForm';

const  defaultRsvp = `Tell us:
- Who's coming?
- Do have any dietary requirements?
- Are you coming to the night before celebrations?
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

          <p>All wedding celebrations will take place at Rudding Park, Harrogate.</p>
        </div>
      </div>

      <div className="row order-of-service">
        <section>
          <h3>Day</h3>
          <p>Arrive at the Chapel at 1pm</p>
          <hr/>
          <p>Drinks reception & jazz</p>
          <hr />
          <p>Wedding breakfast in the Radcliffe Room</p>
        </section>

        <section>
          <h3>Evening</h3>
          <div className="evening">
            <p>Arrive at the Radcliffe Room at 7.30pm</p>
            <hr />
            <p>Canapés, drinks, casino & live music</p>
          </div>
        </section>
      </div>

      <div className="row">
        <div className="twelve columns night-before">
          <p>The night before the wedding we have booked the Mackaness Room for some informal drinks at 8pm; you would be more than welcome to join us.</p>
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
