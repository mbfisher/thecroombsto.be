import React from 'react';

import './Venue.scss';

export default function Venue() {
  return (
    <div className="page page--venue">
      <h1 className="page__title">Venue</h1>
      <div className="row">
        <div className="twelve columns">
          <h3 className="text--center">
            <a className="text-blue text-hover--green" href="https://www.ruddingpark.co.uk/" target="_black">
              Rudding Park Hotel
            </a>
          </h3>
          <h5 className="text--center">
            Follifoot<br />
            Harrogate<br />
            North Yorkshire<br />
            HG3 1JH
          </h5>
        </div>
      </div>

      <div className="row">
        <div className="twelve columns venue__pic">
          <img src="https://www.ruddingpark.co.uk/media/1554/1h-gallery-wd66-rt.jpg" role="presentation" />
        </div>
      </div>

      <div className="row">
        <div className="twelve columns">
          <div className="venue__map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18773.18477774327!2d-1.5098797617333695!3d53.973516535249225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879519a142cdf57%3A0xcdaaafbf8e064753!2sRudding+Park!5e0!3m2!1sen!2suk!4v1485338774405" width="600" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen />
          </div>
        </div>
      </div>
    </div>
  );
}