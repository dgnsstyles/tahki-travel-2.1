import React, {Component} from 'react';
import {Header} from 'semantic-ui-react'
import MachuPichu from '../../assets/Images/machu-picchu.jpg'

import './HeroDestinos.scss'

class HeroDestinos extends Component {
    constructor(props){
        super(props)

        this.state = {
            destinos: []
        }
    }

    componentDidMount(){

    }

    render(props) {

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
                    }}>{this.state.destinos.title}</h1>
                </Header>

            </div>
        );
    }
}


export default HeroDestinos;

