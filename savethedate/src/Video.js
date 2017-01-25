import React from 'react';
import ReactDOM from 'react-dom';
import VideoPlayer from 'react-html5video';
const debug = require('debug')('Video');

export default class Video extends React.Component {
    static propTypes = {
        onSkip: React.PropTypes.func.isRequired,
    };

    state = {
        showLoading: true,
    };

    play() {
        this.refs.video.play();
    }

    onCanPlay() {
        debug('canPlay');
        //this.setState({ showLoading: false });
    }

    onEnded() {
        debug('ended');
        this.props.onSkip();
    }

    onPause() {
        debug('paused');
        if (!this.refs.video.videoEl.webkitDisplayingFullScreen) {
            this.onEnded();
        }
    }

    render() {
        const src = document.location.hostname.indexOf('thecroombsto.be') > -1
            ? '//thecroombsto.be.s3-eu-west-1.amazonaws.com/bg.mp4' : '/bg.mp4';

        return (
            <div>
                <VideoPlayer autoPlay id="bgvid" ref="video"
                             onCanPlay={this.onCanPlay.bind(this)}
                             onEnded={this.onEnded.bind(this)}
                             onPause={this.onPause.bind(this)}>
                    <source src={src} type="video/mp4"/>
                </VideoPlayer>
                <a href="#" className="skip" onClick={this.props.onSkip}>SKIP</a>
            </div>
        );
    }
}

