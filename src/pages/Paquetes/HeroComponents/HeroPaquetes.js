import React, {Component} from 'react';
import {Header} from 'semantic-ui-react'
import PropTypes from 'prop-types';
import './HeroPaquetes.scss'

class HeroPaquetes extends Component {
    render() {
        return (
            <div className="Header">
                <Header><h1>Cusco</h1></Header>
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
              font-size: 120px;
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
