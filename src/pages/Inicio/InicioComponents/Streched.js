import React from 'react';
import MachuPichu from '../../../assets/Images/maxresdefault.png'
import TorresDelPaine from '../../../assets/Images/Torres_del_paine.jpg'
import Lima from '../../../assets/Images/Lima.png'
import { Grid, Segment, Container, Image, Reveal, Responsive } from 'semantic-ui-react'


const Streched = () => {
    return (
        <Container>
            <Grid columns={2} stackable >
                <Grid.Row stretched style={{ marginLeft: '3em', marginRight:'3em' }}>
                    <Grid.Column>

                        <Reveal animated='move'>
                            <Reveal.Content visible>
                                <Image src={MachuPichu} size='massive' >
                                    <Container style={{paddingLeft:'1em', paddingRight:'10.305343511450381vw'}}>
                                        <h1 className="headCard invertedText">Cusco</h1>



                                    </Container>
                                </Image>
                            </Reveal.Content>

                            <Reveal.Content hidden style={{backgroundImage:`url("${MachuPichu}")`, backgroundSize:'cover', height:'100%'}}>

                            </Reveal.Content>
                        </Reveal>

                    </Grid.Column>
                    <Grid.Column>
                        <div style={{ paddingBottom:'10px'}}>
                            <Reveal animated='move'>
                                <Reveal.Content visible>
                                    <Image src={TorresDelPaine} size='massive' dimmer >
                                        <Container>
                                            <div style={{ paddingTop:'252px', margin:'0', paddingLeft:'0.125em'}}>

                                                <h1 className="invertedText-2"> Torres del Paine</h1>


                                            </div>
                                        </Container>
                                    </Image>
                                </Reveal.Content>
                                <Reveal.Content hidden style={{backgroundImage:`url("${TorresDelPaine}")`, backgroundSize:'cover', height: '100%'}}>

                                </Reveal.Content>
                            </Reveal>
                        </div>
                        <Responsive>
                            <Reveal animated='move'>
                                <Reveal.Content visible>
                                    <Image src={Lima} size='big' >
                                        <div style={{ paddingTop:'252px', paddingRight:'10px', paddingLeft:'20px', margin:'0'}}>

                                            <h1 className="invertedText">Lima</h1>

                                        </div>
                                    </Image>
                                </Reveal.Content>
                                <Reveal.Content className="Card-Hover" hidden style={{backgroundImage:`url("${Lima}")`,  backgroundSize:'cover', height: '100%'}}>

                                </Reveal.Content>
                            </Reveal>
                        </Responsive>
                    </Grid.Column>

                </Grid.Row>
            </Grid>
            <style jsx>{`
        .invertedText{
        color: white;
        padding-bottom: 40px;
        font-size: 35px}
        .invertedText-2{
         color: white;
         padding-bottom: 40px;
         font-size 40px;
        }

        .headCard{
        padding-top: 500px;
        font-size: 70px;
        font-weight: bold;
       }
       .precioCard1{
        padding-left: 287px;
        padding-bottom: 60px;

        font-size: 49px;
        }
        .Card-Divider{
         height: 3px;
         background-color: white;
         width: 100%;
        }
      }
         `}</style>
        </Container>
    );
};

export default  Streched;
