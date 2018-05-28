import React from 'react';
import {Switch} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Destinos from "../pages/Destinos/Destinos";
import Inicio from "../pages/Inicio/Inicio";
import Nosotros from "../pages/Nosotros/Nosotros";
import Paquetes from "../pages/Paquetes/Paquetes";
import Contacto from "../pages/Contacto/Contacto";

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/"  exact="true" component={Inicio}></Route>
                <Route path="/Destinos"  component={Destinos}></Route>
                <Route path="/Destinos/:id" component={Destinos}></Route>
                <Route path="/Nosotros"  component={Nosotros}></Route>
                <Route path="/Contacto" component={Contacto}></Route>
                <Route path="/Paquetes/:id" component={Paquetes}></Route>
            </Switch>
        </div>
    );
};

export default Routes;
