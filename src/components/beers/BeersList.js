import React, { Component } from 'react';
import axios from 'axios';

import BeerCard from './BeerCard.js';

class BeersList extends Component {
    state = {
        beers: []
    }

    getAllBeers = () => {
        axios.get('https://ih-beer-api.herokuapp.com/beers')
            .then(r => {
                this.setState({
                    beers: r.data.filter(o => !o.id).slice(0,10)
                })
            })
            .catch(err => console.error(err))
    }

    componentDidMount = () => {
        this.getAllBeers();
    }

    render() {
        return (
            <div>
                <h1>BeersList</h1>
                <ul>
                    {this.state.beers.map(beer => {
                        return (
                            <BeerCard key={beer._id} id={beer._id} image={beer.image_url} name={beer.name} tagline={beer.tagline} contributed={beer.contributed_by} />
                        )
                    })} 
                </ul>
            </div>
        )
    }
}

export default BeersList;