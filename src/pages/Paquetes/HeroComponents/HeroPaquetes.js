import React, {Component} from 'react';
import {Header} from 'semantic-ui-react'
import MachuPichu from '../../../assets/Images/machu-picchu.jpg'
import './HeroPaquetes.scss'

class HeroPaquetes extends Component {

    constructor(props){
        super(props);
        this.state = {
            tours: ''
        }
    }
    async componentDidMount() {
        this.fetchData()
    }
    async componentDidMount() {
        const res = await fetch('http://localhost:3001/v1/tours');
        const data = await res.json();
        this.setState({
            tours: data[0]
        })
    }
    render(props) {
        return (
            <div style={styleComponent}>
                <Header><h1
                style={{
                    fontSize: '50px',
                    textAlign: 'center',
                    fontFamily: 'raleway',
                    color: 'white',
                    paddingTop: '1em'
                }}>{this.state.tours.title}</h1>
                </Header>
            </div>
        );
    }
}
const styleComponent = {
    backgroundImage: `url("${MachuPichu}")`,
    backgroundSize: 'cover',
    display: 'block',
    marginBottom: '3em',
    width:'100%',
    paddingTop: '100px',
    paddingBottom: '150px'
}



export default HeroPaquetes;
