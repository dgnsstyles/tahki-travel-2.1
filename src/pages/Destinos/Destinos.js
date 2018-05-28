import React, {Component} from 'react';
import CardDestinos from './CardDestinos'
import HeroDestinos from './HeroDestinos'
import { Divider, Container } from 'semantic-ui-react'



class destinos extends Component {

    constructor(props){
        super(props);
        this.state = {
            destinos: ''
        }
    }

    async componentDidMount() {
        const res = await fetch(`http://localhost:3001/v1/destinations`);
        const data = await res.json();
        this.setState({
            destinos: data[0]
        })
    }
    render() {
        return (
            <div>

                <HeroDestinos props={this.state.destinos}/>
                <h1 style={{ textAlign: 'center', fontSize: '35px'}}>Destinos</h1>
                <Divider/>
                <Container>
                    <CardDestinos props={this.state.destinos} params={this.props.match.params}/>
                    <br/>
                </Container>

            </div>
        );
    }
}



export default destinos;
