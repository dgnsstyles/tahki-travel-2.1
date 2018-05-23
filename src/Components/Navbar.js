import React, {Component} from 'react';
import { Link }  from 'react-router-dom';
import { Container, Image,  Menu, Sidebar, Responsive, Icon, Button, Visibility } from 'semantic-ui-react'
import Inicio from '../pages/Inicio/Inicio'
import Destinos from '../pages/Destinos/Destinos'
import Nosotros from '../pages/Nosotros/Nosotros'
import Contacto from "../pages/Contacto/Contacto";
import Paquetes from '../pages/Paquetes/Paquetes'
import './Navbar.scss'
import PropTypes from 'prop-types';

class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {active: false};
    }
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
    render() {
        const { children } = this.props
        const { fixed } = this.state
        return (
            <Responsive {...Responsive.onlyComputer}>
                <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
                    <Menu
                        pointing={!fixed}
                        borderless
                        fixed={fixed ? 'top' : null}
                        size='massive'
                        color='black'
                        className="Navbar"
                    >
                        <Container>
                            <Menu.Item header><Link to="/" component={Inicio} style={{ fontFamily: 'Raleway'}}><Image/></Link></Menu.Item>
                            <Menu.Item position='right'><Link to="/" exact component={Inicio} style={{fontfamily:'Raleway'}}>Inicio</Link></Menu.Item>
                            <Menu.Item position='right'><Link to="/Destinos" component={Destinos} style={{ fontFamily: 'Raleway'}}>Destinos</Link></Menu.Item>
                            <Menu.Item position='right'><Link to="/Nosotros" component={Nosotros} style={{ fontFamily: 'Raleway'}}>Nosotros</Link></Menu.Item>
                            <Menu.Item position='right'><Link to="/contacto" component={Contacto} style={{ fontFamily: 'Raleway'}}>Contacto</Link></Menu.Item>
                        </Container>
                    </Menu>
                </Visibility>
            </Responsive>
        );
    }
}

Navbar.propTypes = {};

export default Navbar;
