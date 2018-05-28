import React, { Component } from 'react';
import {Grid, Container, Card} from 'semantic-ui-react'
import Link from 'react-router-dom/Link'
import Arequipa from '../../assets/Images/Arequipa.png'
import Llama from '../../assets/Images/Llama.png'
import Peru from '../../assets/Images/Peru.png'
import ParacasBoogie from '../../assets/Images/ParacasBoogie.jpg'
import Lima2 from '../../assets/Images/Lima2.jpg'

class CardDestinos extends Component {
    constructor(props){
        super(props);
        this.state = {
            destinos: ''
        }
    }

    async componentDidMount() {
        const res = await fetch('http://localhost:3001/v1/destinations');
        const data = await res.json();
        this.setState({
            destinos: data[0]
        })
    }
    render() {
        return (
            <div>
                <Container>
                    <Grid columns={3} doubling>
                        <Grid.Column>

                            <Card  style={{backgroundImage:`url("${ParacasBoogie}")`,
                                backgroundSize:'cover', display:'block'}}>
                                <Card.Content style={{ paddingTop:'200px'}}>
                                    <Card.Header  style={{ color:'white', fontSize:'25px'}}>
                                        {this.state.destinos.title}
                                        <div style={{height:'1.5px', backgroundColor:'white'}}></div>
                                    </Card.Header>

                                    <Card.Meta style={{color:'white'}} >
                                        <span className="date"></span>
                                    </Card.Meta>
                                    <Card.Description  style={{color:'white', fontWeight:'bold'}} >
                                        <Link to='/Destinos/:id'> {this.state.destinos.description} </Link>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card  style={{backgroundImage:`url("${Llama}")`,
                                backgroundSize:'cover', display:'block'}}>
                                <Card.Content style={{ paddingTop:'200px'}}>
                                    <Card.Header  style={{ color:'white', fontSize:'25px'}}>
                                        {this.state.destinos.title}
                                        <div style={{height:'1.5px', backgroundColor:'white'}}></div>
                                    </Card.Header>

                                    <Card.Meta style={{color:'white'}} >
                                        <span className="date"></span>
                                    </Card.Meta>
                                    <Card.Description  style={{color:'white', fontWeight:'bold'}} >
                                        {this.state.destinos.description}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card  style={{backgroundImage:`url("${Lima2}")`,
                                backgroundSize:'cover', display:'block'}}>
                                <Card.Content style={{ paddingTop:'200px'}}>
                                    <Card.Header  style={{ color:'white', fontSize:'25px'}}>
                                        {this.state.destinos.title}
                                        <div style={{height:'1.5px', backgroundColor:'white'}}></div>
                                    </Card.Header>

                                    <Card.Meta style={{color:'white'}} >
                                        <span className="date"></span>
                                    </Card.Meta>
                                    <Card.Description  style={{color:'white', fontWeight:'bold'}} >
                                        {this.state.destinos.description}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        );
    }
}

CardDestinos.propTypes = {};

export default CardDestinos;
