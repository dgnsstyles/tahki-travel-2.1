import React from 'react';
import {Container, Header, Image, Responsive,Button} from 'semantic-ui-react'
import MachuPichu from '../../../assets/Images/machu-picchu.jpg'

import PropTypes from 'prop-types';


const Hero = ({ mobile }) => (
    <Responsive  text style={{ backgroundImage: `url("${MachuPichu}")`,
        display: "block",
        marginTop: '4em',
        paddingBottom: '4em',
        height: '100%',
        maxWidth:'100%',
        margin: '0 auto',
        backgroundPositionX: 'center',
        backgroundPositionY: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }}>
        <Container>
            <Header as='h1' content='Viajes para soñar' textAlign='center' style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'bold',
                marginBottom: '0',
                paddingTop: '2em',
                color: 'white',
                fontFamily: 'Raleway'
            }}/>
            <Header
                as='h2'
                content='Vuela alto nosotros'
                textAlign='center'
                style={{
                    fontSize:  mobile ? '1.5em' : '2em',
                    fontWeight: 'normal',
                    marginBottom: '4em',
                    color: 'white',
                    fontFamily: 'Raleway'
                }}
            />
            <Button inverted color='red' size='huge' style={{
                marginLeft:  mobile ? '20%' : '35%',
                marginBottom: mobile ? '2em' : '4em',
                paddingBotton: mobile ? '2em' : '4em',
                paddingLeft:   mobile ? '2em' : '4em',
                paddingRight:  mobile ? '2em' : '4em',
                fontFamily: 'Raleway'

            }}>
                Más información
            </Button>
        </Container>
    </Responsive>
)


Hero.propTypes = {
    mobile: PropTypes.bool,
}

export default Hero;