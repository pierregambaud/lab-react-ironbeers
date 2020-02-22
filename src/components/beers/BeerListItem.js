import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BeerListItem extends Component {
    render() {
        const { id, imageUrl, name, tagline, contributedBy } = this.props;

        return (
            <li key={id}>
                <Link to={`/beers/${id}`}>
                    <img src={imageUrl} alt={name} />
                    {name} - {tagline} - Created by {contributedBy}
                </Link>
            </li>
        )
    }
}

export default BeerListItem;