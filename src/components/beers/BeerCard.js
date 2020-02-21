import React, { Component } from 'react';

class BeerCard extends Component {
    render() {
        const { imageUrl, name, tagline, firstBrewed, attenuationLevel, description, contributedBy } = this.props;

        return (
            <div>
                <h1>{name}</h1>
                <h2>{tagline}</h2>
                <img src={imageUrl} alt={name} />
                <ul>
                    <li>First Brewed: {firstBrewed}</li>
                    <li>Attenuation Level: {attenuationLevel}</li>
                    <li>Description: {description}</li>
                    <li>Contributed by: {contributedBy}</li>
                    <li>First Brewed: {firstBrewed}</li>
                </ul>
            </div>
        )
    }
}

export default BeerCard;