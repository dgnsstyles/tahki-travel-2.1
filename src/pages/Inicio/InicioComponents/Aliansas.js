import React from 'react';
import { Container, Image, Grid } from 'semantic-ui-react'


const Aliansas = () => {
    return (
        <Container style={{ padding: '5em 0em'}}>
            <Grid  stackable columns={3}>
                <Grid.Column>
                    <Image style={{ bottom: '40px', left: '50px'}} src='../static/Images/ViajesPacifico.png'/>
                </Grid.Column>
                <Grid.Column>
                    <Image  style={{ bottom: '10px', left: '50px'}} src='../static/Images/coltur-250-esp.png'/>
                </Grid.Column>
                <Grid.Column>
                    <Image  src='../static/Images/condor_logo.png'/>
                </Grid.Column>
            </Grid>
        </Container>
    );
};

export default Aliansas;
