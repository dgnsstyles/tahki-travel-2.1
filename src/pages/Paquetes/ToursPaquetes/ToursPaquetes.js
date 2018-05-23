import React, { Component } from 'react';
import {Container, Tab} from 'semantic-ui-react'
import DiaUno from '../DiasComponents/DiaUno'
import DiaDos from '../DiasComponents/DiaDos'
import DiaTres from '../DiasComponents/DiaTres'

const panes = [
    { menuItem: 'Dia 1', render: () => <Tab.Pane attached={false}><DiaUno/></Tab.Pane>},
    { menuItem: 'Dia 2', render: () => <Tab.Pane attached={false}><DiaDos/></Tab.Pane>},
    { menuItem: 'Dia 3', render: () => <Tab.Pane attached={false}><DiaTres/></Tab.Pane>}
]

const TourPaquetes = (props) =>(

    <Container>
        <Tab menu={{ secondary: true, pointing: true}} panes={panes}/>

    </Container>
)
export default TourPaquetes