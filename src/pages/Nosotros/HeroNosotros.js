import React from 'react';
import { Image, Responsive } from 'semantic-ui-react';
import NuestraEmpresa from '../../assets/Images/nuestra_empresa.png'

const HeroNosotros = () => {
    return (
        <div>
            <Responsive text>
                <Image src={NuestraEmpresa}/>
            </Responsive>
        </div>
    );
};

export default HeroNosotros;
