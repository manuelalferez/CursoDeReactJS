import React, {Component} from 'react';
import header from "../../images/badge-header.svg";
import './styles/Badges.css'
import BadgesList from "../BadgesList";
import {Link} from "react-router-dom";
import api from "../../api";
import Loader from "./Loader";
import PageError from "./PageError";

class Badges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            data: undefined
        };
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({loading: true, error: null});
        try {
            const data = await api.badges.list();
            this.setState({loading: false, error: null, data: data})
        } catch (error) {
            this.setState({loading: false, error: error})
        }
    };

    render() {
        if (this.state.loading) {
            return <div className='Badges__center'>
                <Loader/>
            </div>
        }
        if (this.state.error) {
            return <div className='Badges__center'>
                <PageError error={this.state.error}/>
            </div>
        }

        return (
            <React.Fragment>
                <div className='Badges__hero'>
                    <img className='img-fluid' src={header} alt='Hero'/>
                </div>

                <div className='Badges__container'>
                    <div className='Badges__buttons'>
                        <Link to='/badge/new' className='btn btn-primary'>Add</Link>
                    </div>
                </div>

                <div className='Badges__list'>
                    <div className='Badges__container'>
                        <BadgesList data={this.state.data}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;