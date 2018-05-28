import React, {Component} from 'react';
import { Link }  from 'react-router-dom';
import LogoNav from '../assets/Images/LogoNav.png'
import { Container, Image,  Menu, Sidebar, Responsive, Icon, Visibility, Segment } from 'semantic-ui-react'
import Inicio from '../pages/Inicio/Inicio'
import Destinos from '../pages/Destinos/Destinos'
import Nosotros from '../pages/Nosotros/Nosotros'
import Contacto from "../pages/Contacto/Contacto";
import './Navbar.scss'
import PropTypes from 'prop-types';

class DesktopContainer extends Component {
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
                        size="massive"
                        color='black'
                        className="Navbar"
                    >
                        <Container>
                            <Menu.Item header><Link to="/" component={Inicio} style={{ fontFamily: 'Raleway'}}><Image src={LogoNav}/></Link></Menu.Item>
                            <Menu.Item position='right' >
                                <Link to="/" exact component={Inicio} style={{fontfamily:'Raleway'}}>Inicio</Link>
                            </Menu.Item>
                            <Menu.Item position='right'><Link to="/Destinos" component={Destinos} style={{ fontFamily: 'Raleway'}}>Destinos</Link></Menu.Item>
                            <Menu.Item position='right'><Link to="/Nosotros" component={Nosotros} style={{ fontFamily: 'Raleway'}}>Nosotros</Link></Menu.Item>
                            <Menu.Item position='right'><Link to="/contacto" component={Contacto} style={{ fontFamily: 'Raleway'}}>Contacto</Link></Menu.Item>
                        </Container>
                    </Menu>
                </Visibility>
                {children}
            </Responsive>
        );
    }
}
DesktopContainer.propType = {
    children: PropTypes.node,
}
class MobileContainer extends Component {
    state = {}

    handlePusherClick = () => {
        const { sidebarOpened } = this.state

        if (sidebarOpened) this.setState({ sidebarOpened: false })
    }

    handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state

        return (
            <Responsive {...Responsive.onlyMobile}>
                <Sidebar.Pushable>
                    <Sidebar as={Menu} animation='uncover' vertical visible={sidebarOpened}>
                        <Menu.Item header><Link to="/" component={Inicio} style={{ fontFamily: 'Raleway'}}><Image src={LogoNav}/></Link></Menu.Item>
                        <Menu.Item position='right' >
                            <Link to="/" exact component={Inicio} style={{fontfamily:'Raleway'}}>Inicio</Link>
                        </Menu.Item>
                        <Menu.Item position='right'><Link to="/Destinos" component={Destinos} style={{ fontFamily: 'Raleway'}}>Destinos</Link></Menu.Item>
                        <Menu.Item position='right'><Link to="/Nosotros" component={Nosotros} style={{ fontFamily: 'Raleway'}}>Nosotros</Link></Menu.Item>
                        <Menu.Item position='right'><Link to="/contacto" component={Contacto} style={{ fontFamily: 'Raleway'}}>Contacto</Link></Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handlePusherClick} style={{ minHeight: '100vh', position:'relative' }}>
                        <Segment inverted textAlign='center' style={{ minHeight: 70, padding: '1em 0em' }} vertical>
                            <Container>
                                <Menu inverted pointing secondary size='medium'>
                                    <Menu.Item onClick={this.handleToggle}>
                                        <Icon name='sidebar' />
                                    </Menu.Item>
                                    <Menu.Item position='right'>

                                    </Menu.Item>
                                </Menu>
                            </Container>

                        </Segment>

                        {children}
                    </Sidebar.Pusher>

                </Sidebar.Pushable>
            </Responsive>
        )
    }
}
MobileContainer.propTypes = {
    children: PropTypes.node
}
const Navbar= ({children} ) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
)
Navbar.propTypes = {
    children: PropTypes.node,
};

export default Navbar;
