import React from 'react';
import  { Card, Icon, Grid, Image, Container } from 'semantic-ui-react'
import Torres_del_paine from '../'

const Cards = () => {
    return (

        <div>
            <Container style={{ paddingLeft:'70px'}}>
            <Grid columns={3} stackable>
                <Grid.Column  mobile={16} tablet={8} computer={5}>
                    <Card >
                        <Image src='../static/Images/Torres_del_paine.jpg' />
                        <Card.Content>
                            <Card.Header>
                                Torres del Paine
                            </Card.Header>
                            <Card.Meta>
                        <span className='date'>
                                Joined in 2015
                            </span>
                            </Card.Meta>
                            <Card.Description>
                                Matthew is a musician living in Nashville.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='user' />
                                22 Friends
                            </a>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={5}>
                    <Card>
                        <Image src='../static/Images/Torres_del_paine.jpg' />
                        <Card.Content>
                            <Card.Header>
                                Torres del Paine
                            </Card.Header>
                            <Card.Meta>
                        <span className='date'>
                                Joined in 2015
                            </span>
                            </Card.Meta>
                            <Card.Description>
                                Matthew is a musician living in Nashville.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='user' />
                                22 Friends
                            </a>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={5}>
                    <Card>
                        <Image src='../static/Images/Torres_del_paine.jpg' />
                        <Card.Content>
                            <Card.Header>
                                Cuzco Maravilloso
                            </Card.Header>
                            <Card.Meta>
                        <span className='date'>
                                Joined in 2015
                            </span>
                            </Card.Meta>
                            <Card.Description>
                                Matthew is a musician living in Nashville.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='user' />
                                22 Friends
                            </a>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>
            <style>{`
            Container {
            display: grid;
            }`}</style>
        </Container>

        </div>
    );
};

export default Cards;
