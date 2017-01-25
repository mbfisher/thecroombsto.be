import React from 'react';

export default class Text extends React.Component {
    static propTypes = {
        names: React.PropTypes.array.isRequired,
    };

    render() {
        let nameString;

        const names = this.props.names.slice(0);

        if (names.length > 1) {
            const lastName = names.pop();
            nameString = `${names.join(', ')} & ${lastName},`;
        } else {
            nameString = `${names[0]},`;
        }

        return (
            <div id="text">
                <h2 className="guests">{nameString}</h2>
                <p>Please save the date for the wedding of</p>
                <h1 className="bridegroom">Ben Croombs &amp; Rebecca Tillman</h1>
                <p>on</p>
                <h2 className="date">Sunday 6th August 2017</h2>
                <p>at</p>
                <h3 className="venue">Rudding Park, Harrogate</h3>
            </div>
        );
    }
}