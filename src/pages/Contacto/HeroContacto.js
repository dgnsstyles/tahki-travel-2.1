import React, {Component} from 'react';
import MachuPichu from '../../assets/Images/machu-picchu.jpg'
import { Responsive, Header } from 'semantic-ui-react'





class HeroContacto extends Component {

    render() {
        return (
            <Responsive>
                <div style={sectionStyle}></div>
            </Responsive>
        );
    }
}
const sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: `url("${MachuPichu}")`,
    display: 'block',
    marginBottom: '3em',
    paddingTop: '100px',
    paddingBottom: '150px'

}


export default HeroContacto;
