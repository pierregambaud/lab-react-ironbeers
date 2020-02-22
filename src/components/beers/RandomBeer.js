import React, { Component } from 'react';
import axios from 'axios';
import BeerCard from './BeerCard';

class RandomBeer extends Component {
    state = {}

    getRandomBeer = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(r => {
                const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by } = r.data;

                this.setState({
                    image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by
                })
            })
            .catch(err => console.error(err))
    }

    componentDidMount = () => {
        this.getRandomBeer();
    }

    render() {
        const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by } = this.state;
        
        return (
            <BeerCard
                imageUrl={image_url}
                name={name} 
                tagline={tagline} 
                contributedBy={contributed_by} 
                firstBrewed={first_brewed} 
                attenuationLevel={attenuation_level} 
                description={description} 
            />
        )
    }
}

export default RandomBeer;