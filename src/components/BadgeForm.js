import React, {Component} from 'react';

class BadgeForm extends Component {
    handleChange = (e) => {
        console.log({
            name: e.target.name,
            value: e.target.value
        })
    };
    handleClick = () => {
        console.log('Button was clicked');
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit was prevent');
    };

    render() {
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>First Name</label>
                        <input onChange={this.handleChange} className='from-control' type='text' name='firstName'/>
                    </div>
                    <button onClick={this.handleClick} className='btn btn-primary'>Send</button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;