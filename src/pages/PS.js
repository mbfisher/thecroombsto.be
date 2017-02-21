import React from 'react';
import EmailForm from '../EmailForm';

const PS = () => (
  <div className="page page--ps">
    <h1 className="page__title">P.S.</h1>
    <div className="container">
      <div className="row">
        <div className="twelve columns">

          <h3>Gifts</h3>
          <p>It is your presence, not your presents, that is important to us. However, if you would like to give a
            gift please visit <a href="https://prezola.com">prezola.com</a>, click the "Buy a wedding gift" button and
            enter the following gift list number:</p>
          <h4>10162598</h4>
          <hr />

          <h3>Music</h3>
          <p>Please use the box below to request a song to be played during the evening:</p>
          <EmailForm action="/music" placeholder="I'd like to hear:" />
          <hr/>

          <h3>Taxis</h3>
          <p>If you require a taxi, here are a couple of local firms:</p>
          <ul>
            <li>Blueline Taxi - 01423 530830</li>
            <li>Elite Taxi - 01423 538509</li>
          </ul>
          <hr/>

        </div>
      </div>
    </div>
  </div>
);

export default PS;