import React, {Component} from 'react';
import { Divider, Container, Grid, GridRow, Menu } from 'semantic-ui-react'
import PropTypes from 'prop-types';

class Nosotros extends Component {
    render() {
        return (
            <div>
                <Divider horizontal><h2>QUIENES SOMOS</h2></Divider>
                <Container>
                    <h1>Compañia</h1>
                    <Grid>
                        <GridRow columns={1}>
                            <Grid.Column width={12} style={{ paddingBottom: '30px'}}>
                                <p>Bienvenidos a Tahki Travel, la agencia de viajes chilena que desarrolla experiencias únicas para sus clientes en el mundo. Contamos con un equipo altamente capacitado y dedicado a entregar una asesoría integral y una atención personalizada a través de un servicio creativo, seguro y confiable.<br/>
                                    Los invitamos a conocernos y a ser parte de esta nueva forma de mirar al mundo.
                                </p>
                            </Grid.Column>

                        </GridRow>
                    </Grid>

                </Container>
            </div>
        );
    }
}

Nosotros.propTypes = {};

export default Nosotros;
