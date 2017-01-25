import React from 'react';
import Video from './Video';
import Banner from './Banner';
import Text from './Text';
const debug = require('debug')('App');

export default class App extends React.Component {
    static propTypes = {
        user: React.PropTypes.object.isRequired
    };

    state = {
        ready: false,
        showVideo: true,
        showTextToggle: true,
        showPlayButton: false,
        showText: true,
        showBanner: false,
        textClass: 'overlay',
        toggleButtonText: 'HIDE TEXT',
    };

    componentDidMount() {
        this.canAutoPlay(result => {
            if (result) {
                debug('Rendering background video');
                this.setState({
                    ready: true,
                });
            } else {
                debug('Rendering static');
                this.setState({
                    ready: true,
                    showVideo: false,
                    showPlayButton: true,
                    showTextToggle: false,
                    showText: true,
                    showBanner: true,
                });
            }
        });
    }

    canAutoPlay(cb) {
        if (window.hasOwnProperty('videoautoplay')) {
            cb(window.videoautoplay);
        }

        Modernizr.on('videoautoplay', result => {
            window.videoautoplay = result;
            cb(result);
        });
    }

    playVideo() {
        this.setState({
            showText: false,
            showBanner: false,
            showVideo: true
        }, () => {
            this.refs.video.play();
        });
    }

    skipVideo() {
        this.setState({
            showVideo: false,
            showBanner: true,
            showText: true,
        });
    }

    toggleText() {
        const showText = !this.state.showText;
        const toggleButtonText = showText ? 'HIDE TEXT' : 'SHOW TEXT';
        this.setState({ showText, toggleButtonText });
    }

    render() {
        if (!this.state.ready) {
            return null;
        }

        const state = this.state;
        let banner, video, text, textToggle;

        if (state.showBanner) {
            banner = <Banner onPlay={this.playVideo.bind(this)} showPlayButton={state.showPlayButton}/>;
        } else if (state.showVideo) {
            video = <Video ref="video" onSkip={this.skipVideo.bind(this)}/>;
            if (state.showTextToggle) {
                textToggle = <a href="#" className="toggle" onClick={this.toggleText.bind(this)}>{state.toggleButtonText}</a>;
            }
        }

        if (state.showText) {
            text = <Text names={this.props.user.names}/>
        }

        return (
            <div>
                {video}
                {textToggle}
                {banner}
                {text}
            </div>
        );
    }
}