import React, { Component } from 'react';

class FormInput extends Component {
    updateInput = (e) => {
        this.props.update(e);
    }

    render() {
        const { type, name, value, error } = this.props;
        console.log('render', this.props);

        return (
            <label>
                <b>{name}</b>
                <input type={type} name={name} value={value} onChange={this.updateInput} />
                {error && <span className="error">{error}</span>}
            </label>
        )
    }
}

export default FormInput;