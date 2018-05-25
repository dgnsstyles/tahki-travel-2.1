import React, {Component} from 'react';
import {Header} from 'semantic-ui-react'
import MachuPichu from '../../assets/Images/machu-picchu.jpg'
import PropTypes from 'prop-types';
import './HeroDestinos.scss'

class HeroDestinos extends Component {

    render() {
        return (
            <div className="Header"
            style={{
                backgroundImage:`url("${MachuPichu}")`,
                backgroundSize: 'cover',
                display: 'block',
                marginBottom: '3em',
                width: '100%',
                paddingTop: '70px',
                paddingBottom:'150px'
            }}>
                <Header>
                    <h1 style={{
                        textAlign: 'center',
                        fontFamily: 'Raleway',
                        color: 'white',
                        fontSize: '130px',
                        paddingTop: '1em'
                    }}>Cuzco</h1>
                </Header>

            </div>
        );
    }
}


HeroDestinos.propTypes = {};

export default HeroDestinos;

