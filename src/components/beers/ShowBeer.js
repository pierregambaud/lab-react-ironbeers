import React, { Component } from "react";
import axios from "axios";

class ShowBeer extends Component {
    state = {}
    
    getBeer = () => {
        const id = this.props.match.params.beerId;

        axios.get(`https://ih-beer-api.herokuapp.com/beers/${id}`)
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
            <div>
                <h1>{name}</h1>
                <h2>{tagline}</h2>
                <img src={image} alt={name} />
                <ul>
                    <li>First brewed: {first_brewed}</li>
                    <li>Attenuation level: {attenuation_level}</li>
                    <li>Description: {description}</li>
                    <li>Contributed by: {contributed_by}</li>
                </ul>
            </div>
        )
    }
}

export default ShowBeer;