import React from 'react';
import { Container, Image, Grid } from 'semantic-ui-react'
import ViajesPacifico from '../../../assets/Images/ViajesPacifico.png'
import Coltur from '../../../assets/Images/coltur-250-esp.png'
import CondorTravel from '../../../assets/Images/condor_logo.png'

const Aliansas = () => {
    return (
        <Container style={{ padding: '5em 0em'}}>
            <Grid  stackable columns={3}>
                <Grid.Column>
                    <Image style={{ bottom: '40px', left: '50px'}} src={ViajesPacifico}/>
                </Grid.Column>
                <Grid.Column>
                    <Image  style={{ bottom: '10px', left: '50px'}} src={Coltur}/>
                </Grid.Column>
                <Grid.Column>
                    <Image  src={CondorTravel}/>
                </Grid.Column>
            </Grid>
        </Container>
    );
};

export default Aliansas;
