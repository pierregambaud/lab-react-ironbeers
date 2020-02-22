import React, { Component } from 'react';
import FormInput from './FormInput';
import './NewBeer.css';

const validateForm = (errors) => {
    let valid = true;

    Object.values(errors).forEach(val => val.length > 0 && (valid = false));

    return valid;
}

class NewBeer extends Component {
    state = {
        name: "",
        tagline: "",
        description: "",
        firstBrew: "",
        brewerTips: "",
        attenuationLevel: "",
        contributedBy: "",
        errors: {}
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        const errors = this.state.errors;

        switch (name) {
            case "name":
                errors.name = value.length < 5 ? "Name length should be minimum 5 characters" : "";
                break;

            case "tagline":
                errors.tagline = value.length < 5 ? "Tagline length should be minimum 5 characters" : "";
                break;
            
            case "description":
                errors.description = value.length < 5 ? "Description length should be minimum 5 characters" : "";
                break;
            
            case "firstBrew":
                errors.firstBrew = value.length < 5 ? "FirstBrew length should be minimum 5 characters" : "";
                break;

            case "brewerTips":
                errors.brewerTips = value.length < 5 ? "BrewerTips length should be minimum 5 characters" : "";
                break;
            
            case "attenuationLevel":
                errors.attenuationLevel = value.length < 5 ? "AttenuationLevel length should be minimum 5 characters" : "";
                break;
            
            case "contributedBy":
                errors.contributedBy = value.length < 5 ? "ContributedBy length should be minimum 5 characters" : "";
                break;

            default:
                break;
        }

        this.setState({
            errors,
            [name]: value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        if(validateForm(this.state.errors)) {
            console.log("form OK")
        } else {
            console.log("form KO")
        }
    }

    render() {
        return (
            <div>
                <h1>Add a new Beer</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <FormInput type="text" name="name" value={this.state.name} update={this.handleChange} error={this.state.errors.name} noValidate />
                    <FormInput type="text" name="tagline" value={this.state.tagline} update={this.handleChange} error={this.state.errors.tagline} noValidate />
                    <FormInput type="text" name="description" value={this.state.description} update={this.handleChange} error={this.state.errors.description} noValidate />
                    <FormInput type="text" name="firstBrew" value={this.state.firstBrew} update={this.handleChange} error={this.state.errors.firstBrew} noValidate />
                    <FormInput type="text" name="brewerTips" value={this.state.brewerTips} update={this.handleChange} error={this.state.errors.brewerTips} noValidate />
                    <FormInput type="text" name="attenuationLevel" value={this.state.attenuationLevel} update={this.handleChange} error={this.state.errors.attenuationLevel} noValidate />
                    <FormInput type="text" name="contributedBy" value={this.state.contributedBy} update={this.handleChange} error={this.state.errors.contributedBy} noValidate />
                    <button>Add a beer</button>
                </form>
            </div>
        )
    }
}

export default NewBeer;