const express = require('express');
const join = require('path').join;
const sendgrid = require('sendgrid');

const app = express();

app.use(require('body-parser').text());
app.use(express.static(join(__dirname, 'build')));

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY not found');
}

const emailRecipient = process.env.NODE_ENV === 'development' ? 'mike@mbfisher.com' : 'ben.croombs@me.com';

const sendEmail = (subject, message, cb) => {
  const fromEmail = new sendgrid.mail.Email('rsvp@thecroombsto.be');
  const toEmail = new sendgrid.mail.Email(emailRecipient);
  const content = new sendgrid.mail.Content('text/plain', message);
  const mail = new sendgrid.mail.Mail(fromEmail, subject, toEmail, content);

  const sg = sendgrid(process.env.SENDGRID_API_KEY);
  const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON(),
  });

  console.log('Sending email', emailRecipient, subject);

  sg.API(request, function(err, response) {
    if (err || response.statusCode !== 202) {
      console.error(err, response.statusCode, response.body, response.headers);
      return cb(err, response);
    }

    cb(null, response);
  });
};

app.post('/rsvp', (req, res) => {
  sendEmail('Wedding RSVP', req.body, (err, response) => {
    if (err) {
      console.error(err, response.statusCode, response.body, response.headers);
      return res.status(500).end();
    }

    res.end();
  });
});

app.post('/music', (req, res) => {
  sendEmail('Wedding Music Request', req.body, (err, response) => {
    if (err) {
      console.error(err, response.statusCode, response.body, response.headers);
      return res.status(500).end();
    }

    res.end();
  });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on %s:%d', listener.address().address, listener.address().port);
});