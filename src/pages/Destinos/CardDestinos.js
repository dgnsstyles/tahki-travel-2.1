import React, { Component } from 'react';
import {Grid, Container, Card} from 'semantic-ui-react'
import Arequipa from '../../assets/Images/Arequipa.png'

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

                            <Card  style={{backgroundImage:'url("../../assets/Images/Arequipa.png")',
                                backgroundSize:'cover', display:'block'}}>
                                <Card.Content style={{ paddingTop:'200px'}}>
                                    <Card.Header  style={{ color:'white', fontSize:'25px'}}>
                                        Arequipa
                                        <div style={{height:'1.5px', backgroundColor:'white'}}></div>
                                    </Card.Header>

                                    <Card.Meta style={{color:'white'}} >
                                        <span className="date">21 de Febrero</span>
                                    </Card.Meta>
                                    <Card.Description  style={{color:'white', fontWeight:'bold'}} >
                                        14 dias en Europa maravillosa, hoteles y translados incluidos
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card  style={{backgroundImage:'url("/static/Images/Llama.png")',
                                backgroundSize:'cover', display:'block'}}>
                                <Card.Content style={{ paddingTop:'200px'}}>
                                    <Card.Header  style={{ color:'white', fontSize:'25px'}}>
                                        Iquitos
                                        <div style={{height:'1.5px', backgroundColor:'white'}}></div>
                                    </Card.Header>

                                    <Card.Meta style={{color:'white'}} >
                                        <span className="date">21 de Febrero</span>
                                    </Card.Meta>
                                    <Card.Description  style={{color:'white', fontWeight:'bold'}} >
                                        14 dias en Europa maravillosa, hoteles y translados incluidos
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card  style={{backgroundImage:'url("/static/Images/Peru.png")',
                                backgroundSize:'cover', display:'block'}}>
                                <Card.Content style={{ paddingTop:'200px'}}>
                                    <Card.Header  style={{ color:'white', fontSize:'25px'}}>
                                        Lima
                                        <div style={{height:'1.5px', backgroundColor:'white'}}></div>
                                    </Card.Header>

                                    <Card.Meta style={{color:'white'}} >
                                        <span className="date">21 de Febrero</span>
                                    </Card.Meta>
                                    <Card.Description  style={{color:'white', fontWeight:'bold'}} >
                                        14 dias en Europa maravillosa, hoteles y translados incluidos
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
