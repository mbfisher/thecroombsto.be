import React from 'react';

import Cookies from 'cookies-js';

export default class EmailForm extends React.Component {
  static propTypes = {
    action: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    cookieName: React.PropTypes.string,
  };
  
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      success: false,
      error: false,
      loading: false,
    };

    this.onMessageChange = this.onMessageChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    if (this.props.cookieName) {
      const message = Cookies.get(this.cookieName);

      if (message) {
        this.setState({ success: true, message });
      }
    }
  }

  onMessageChange(e) {
    this.setState({ message: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    this.setState({ loading: true, success: false, error: false });

    fetch(this.props.action, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: this.state.message
    }).then(res => {
      this.setState({ loading: false });

      if (res.status === 200) {
        this.setState({ success: true });
      } else {
        this.setState({ error: true });
      }
    }).catch(err => {
      this.error(err);

      this.setState({ loading: false });
      this.setState({ error: true })
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <p><textarea name="rsvp" rows={10} cols={30} value={this.state.message} onChange={this.onMessageChange} placeholder={this.props.placeholder}/></p>
        <p><button type="submit">{this.state.loading ? <img src="/loading.svg" width="30px" style={{padding: "3px 0"}} /> : 'Submit'}</button></p>
        {this.state.error && <p className="error">Oops, something went wrong! Please try again.</p>}
        {this.state.success && <p className="success">Thanks! If you forgot something, just update the text and click 'Submit' again.</p>}
      </form>
    );
  }
}