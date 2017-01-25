const express = require('express');
const join = require('path').join;

const app = express();

app.use(require('body-parser').text());
app.use(express.static(join(__dirname, 'build')));

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY not found');
}

const rsvpEmail = process.env.NODE_ENV === 'development' ? 'mike@mbfisher.com' : 'ben.croombs@me.com';

app.post('/rsvp', (req, res) => {
  const helper = require('sendgrid').mail;
  const fromEmail = new helper.Email('rsvp@thecroombsto.be');
  const toEmail = new helper.Email(rsvpEmail);
  const subject = 'Wedding RSVP';
  const content = new helper.Content('text/plain', req.body);
  const mail = new helper.Mail(fromEmail, subject, toEmail, content);

  const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
  const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON(),
  });

  console.log('Sending RSVP', req.body);

  sg.API(request, function(err, response) {
    if (err || response.statusCode !== 202) {
      console.error(err, response.statusCode, response.body, response.headers);
      return res.status(500).end();
    }

    res.end();
  });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on %s:%d', listener.address().address, listener.address().port);
});