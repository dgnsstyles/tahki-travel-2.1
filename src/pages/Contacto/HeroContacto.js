import React, {Component} from 'react';
import { Responsive } from 'semantic-ui-react'

const HeroContacto = ({mobile}) =>(
    <Responsive>
        <div className="HeroContacto">
            <style>{`
           .HeroContacto{
            background-image: url("{process.env.PUBLIC_URL + '/assets/images/machupichu.jpg'}");
           background-size: cover;
            display: block;
            margin-bottom: 3em;
            width: 100%;
            padding-top: 100px;
            padding-bottom: 150px;
           }`}</style></div>

    </Responsive>
)

export default HeroContacto