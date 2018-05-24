import React, {Component} from 'react';
import CardDestinos from './CardDestinos'
import HeroDestinos from './HeroDestinos'
import { Divider, Container } from 'semantic-ui-react'
import PropTypes from 'prop-types';

class destinos extends Component {

    constructor(props){
        super(props);
        this.state = {
            destinos: ''
        }
    }
    async componentDidMount() {
        this.fetchData()
    }
    async componentDidMount() {
        const res = await fetch('http://localhost:3001/v1/destinations');
        const data = await res.json();
        this.setState({
            destinos: data[0]
        })
    }
    render() {
        return (
            <div>

                <HeroDestinos props={this.state.destinos.map}/>
                <h1>destinos</h1>
                <Divider/>
                <Container>
                    <CardDestinos/>
                </Container>

            </div>
        );
    }
}

destinos.propTypes = {};

export default destinos;
