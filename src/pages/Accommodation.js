import React from 'react';

export default function Accommodation() {
  return (
    <div className="page page--accommodation">
      <h1 className="page__title">Accommodation</h1>
      <div className="container">
        <div className="row">
          <div className="twelve columns">
            <p>If you would like to stay at Rudding Park please <a href="https://www.ruddingpark.co.uk">visit their website</a>.
              They have rooms, cottages, luxury lodges for larger groups and a caravan park.</p>

            <p>Although the hotel is beautiful, we recognise that the rooms are quite expensive. There are several alternatives nearby:</p>
          </div>
        </div>

        <div className="row accommodation__hotels">
          <div className="six columns">
            <Hotel name="The Innkeeper's Lodge" distance={1.5} cost={75}
                   url="https://www.innkeeperslodge.com/harrogate-west-beckwith-knowle/"
                   img="http://www.innkeeperslodge.com/images/lodge_images/gallery/harrogate-west2.jpg" />
          </div>
          <div className="six columns">
            <Hotel name="The Crown Hotel" distance={3.8} cost={80}
                   url="http://www.crownhotelharrogate.com/"
                   img="http://www.crownhotelharrogate.com/CrownHotel/media/images/Room-245-The-Crown-Hotel-HGT.jpg"/>
          </div>
        </div>
        <div className="row accommodation__hotels">
          <div className="six columns">
            <Hotel name="White Heart Hotel" distance={3.7} cost={80}
                   url="http://www.whiteharthotelharrogate.com/"
                   img="http://www.whiteharthotelharrogate.com/_caches/_image/fit_interlacedmiddlecentre/640x480/userfile/whitehart/white-hart-hotel-harrogate-north-yorkshire-classic-double-bedroom.jpg"/>
          </div>
          <div className="six columns">
            <Hotel name="Holiday Inn" distance={3.6} cost={160}
                   url="https://www.ihg.com/holidayinn/hotels/gb/en/harrogate/hrtuk/hoteldetail"
                   img="http://ihg.scene7.com/is/image/ihg/holiday-inn-harrogate-3801802101-2x1?hei=284" />
          </div>
        </div>
        <div className="row">
          <p className="text--center">(all details above were found using Booking.com)</p>
        </div>
        {/*1.     The Inkeeper’s lodge - Harrogate (1.5miles away) – rooms for about £75 per night*/}

        {/*2.     The Crown Hotel – Harrogate (3.8 miles away) – rooms for about £80 per night*/}

        {/*3.     White Heart Hotel – Harrogate (3.7 miles away) – rooms for about £80 per night*/}

        {/*4.     Holiday Inn – Harrogate (3.6 miles away) – rooms for about £160 per night*/}


      </div>
    </div>
  );
}

const Hotel = ({ name, distance, cost, url, img }) => (
  <div className="accommodation__hotel">
    <h5><a href={url} target="_blank">{name}</a></h5>
    <h6>{distance} miles away</h6>
    <img src={img} width={270} height={180} role="presentation" />
    <p>~£{cost} per night</p>
  </div>
);