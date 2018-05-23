import React, {Component} from 'react';
import CardDestinos from './CardDestinos'
import HeroDestinos from './HeroDestinos'
import { Divider, Container } from 'semantic-ui-react'
import PropTypes from 'prop-types';

class destinos extends Component {
    render() {
        return (
            <div>

                <HeroDestinos/>
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
