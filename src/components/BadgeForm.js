import React, {Component} from 'react';
import './styles/BadgeForm.css'

class BadgeForm extends Component {
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
                        <input onChange={this.props.onChange}
                               className='form-control'
                               type='text'
                               name='firstName'
                               value={this.props.formValues.firstName}/>
                    </div>

                    <div className='form-group'>
                        <label>Last Name</label>
                        <input onChange={this.props.onChange}
                               className='form-control'
                               type='text'
                               name='lastName'
                               value={this.props.formValues.lastName}/>
                    </div>

                    <div className='form-group'>
                        <label>Email</label>
                        <input onChange={this.props.onChange}
                               className='form-control'
                               type='email'
                               name='email'
                               value={this.props.formValues.email}/>
                    </div>

                    <div className='form-group'>
                        <label> Job Tittle</label>
                        <input onChange={this.props.onChange}
                               className='form-control'
                               type='text'
                               name='jobTittle'
                               value={this.props.formValues.jobTittle}/>
                    </div>

                    <div className='form-group'>
                        <label>Twitter</label>
                        <input onChange={this.props.onChange}
                               className='form-control'
                               type='text'
                               name='twitter'
                               value={this.props.formValues.twitter}/>
                    </div>
                    <button onClick={this.handleClick} className='btn btn-primary'>Send</button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;