import React from 'react';
import Route from 'react-router-dom/Route'
import Destinos from "../pages/Destinos/Destinos";
import Inicio from "../pages/Inicio/Inicio";
import Nosotros from "../pages/Nosotros/Nosotros";
import Paquetes from "../pages/Paquetes/Paquetes";
import Contacto from "../pages/Contacto/Contacto";

const Routes = () => {
    return (
        <div>
            <Route path="/"  exact component={Inicio}></Route>
            <Route path="/Destinos" component={Destinos}></Route>
            <Route path="/Nosotros" component={Nosotros}></Route>
            <Route path="/Contacto" component={Contacto}></Route>
            <Route path="/Paquetes" component={Paquetes}></Route>
            <Route path="/Paquetes/:id" component={Paquetes}></Route>
        </div>
    );
};

export default Routes;
