import React, { Component } from "react";
import axios from "axios";
import BeerCard from "./BeerCard";

class ShowBeer extends Component {
    state = {}

    getBeer = () => {
        const id = this.props.match.params.beerId;

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then(r => {
                const { image, name, tagline, first_brewed, attenuation_level, description, contributed_by } = r.data;
                this.setState({
                    image, name, tagline, first_brewed, attenuation_level, description, contributed_by
                })
            })
            .catch(err => console.error(err))
    }

    componentDidMount = () => {
        this.getBeer();
    }

    render() {
        const { image, name, tagline, first_brewed, attenuation_level, description, contributed_by } = this.state;
        
        return (
            <BeerCard 
                image={image}
                name={name} 
                tagline={tagline} 
                contributed={contributed_by} 
                firstBrewed={first_brewed} 
                attenuationLevel={attenuation_level} 
                description={description} 
            />
        )
    }
}

export default ShowBeer;