import React, {Component} from 'react';
import {Header} from 'semantic-ui-react'
import PropTypes from 'prop-types';
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
            <div className="Header">
                <Header><h1>{this.state.tours.title}</h1></Header>
                <style jsx>{`
            .Header{
           background-image: url("/static/Images/machupichu.jpg");
           background-size: cover;
            display: block;
            margin-bottom: 3em;
            width: 100%;
            padding-top: 100px;
            padding-bottom: 150px;

              }
              h1{
              font-size: 50px;
              text-align: center;
              font-family: Raleway;
              color: white;
              padding-top: 1em;
              }


            `}
                </style>
            </div>
        );
    }
}

HeroPaquetes.propTypes = {};

export default HeroPaquetes;
