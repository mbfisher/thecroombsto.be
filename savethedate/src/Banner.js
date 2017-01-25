import React from 'react';

export default class Banner extends React.Component {
    static propTypes = {
        showPlayButton: React.PropTypes.bool.isRequired,
        onPlay: React.PropTypes.func.isRequired,
    };

    componentWillMount() {
        document.body.className += 'banner';
    }

    componentWillUnmount() {
        document.body.className = '';
    }

    render() {
        if (this.props.showPlayButton) {
            return (
                <div className="play">
                    <a href="#" onClick={this.props.onPlay}>PLAY VIDEO</a>
                </div>
            );
        }

        return null;
    }
}