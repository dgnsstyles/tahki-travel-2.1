import React, {Component} from 'react';
import {  Header, Divider, Grid, Image} from 'semantic-ui-react'

import PropTypes from 'prop-types';

class DiaTres extends Component {
    constructor(props){
        super(props);

        this.state = {
            tours: ''
        }
    }
    async componentDidMount() {
        const res = await fetch('http://localhost:3001/v1/tours/');
        const data = await res.json();
        console.log(data)
        this.setState({
            tours: data[0]
        })
    }
    render(props) {
        return (
            <div>
                <Header size='huge' style={{ fontSize:'60px', fontFamily:'Raleway'}}>{this.state.tours.title}
                </Header>
                <Divider/>
                <Grid columns={2}>
                    <Grid.Column width={5}>
                        <Image src="/static/Images/Cusco_114.jpg" rounded size='big' spaced='left'/>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto delectus doloribus error facilis harum inventore laboriosam magni, maxime minima nam nostrum possimus praesentium quas repellendus sit soluta sunt ullam!</p>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

DiaTres.propTypes = {};

export default DiaTres;
