import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BeerCard extends Component {
    render() {
        return (
            <li key={this.props.id}><Link to={`/beers/${this.props.id}`}><img src={this.props.image} alt={this.props.name} />{this.props.name} - {this.props.tagline} - Created by {this.props.contributed}</Link></li>
        )
    }
}

export default BeerCard;