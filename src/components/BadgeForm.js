import React, {Component} from 'react';
import './styles/BadgeForm.css'

class BadgeForm extends Component {
    state = {
        firstName: 'Manuel'
    };
    handleChange = (e) => {
        this.setState({
                [e.target.name]: e.target.value
            }
        )
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
            <div className='BadgeForm'>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>First Name</label>
                        <input onChange={this.handleChange}
                               className='form-control'
                               type='text'
                               name='firstName'
                               value={this.state.firstName}/>
                    </div>

                    <div className='form-group'>
                        <label>Last Name</label>
                        <input onChange={this.handleChange}
                               className='form-control'
                               type='text'
                               name='lastName'
                               value={this.state.lastName}/>
                    </div>

                    <div className='form-group'>
                        <label>Email</label>
                        <input onChange={this.handleChange}
                               className='form-control'
                               type='email'
                               name='email'
                               value={this.state.email}/>
                    </div>

                    <div className='form-group'>
                        <label>Job</label>
                        <input onChange={this.handleChange}
                               className='form-control'
                               type='text'
                               name='jobTittle'
                               value={this.state.jobTittle}/>
                    </div>

                    <div className='form-group'>
                        <label>Twitter</label>
                        <input onChange={this.handleChange}
                               className='form-control'
                               type='text'
                               name='twitter'
                               value={this.state.twitter}/>
                    </div>
                    <button onClick={this.handleClick} className='btn btn-primary'>Send</button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;