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
      <div className="row">
        <div className="twelve columns">
          <h2>My Invitation</h2>

          <p>All of the wedding celebrations will take place at Rudding Park and we will be staying in the main hotel
            there on the 5th, 6th and 7th of August.</p>

          <p>On the evening of the 5th, we have booked a large room (next to the bar) and will be there from 8pm onwards.
            If you would like to join us for a drink then you would be more than welcome. It’s going to be a relaxed
            social occasion.</p>

          <p>Please use the box</p>
        </div>
      </div>
    </div>
  );
}