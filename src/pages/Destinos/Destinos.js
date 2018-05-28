import React, {Component} from 'react';
import axios from 'axios'
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
        axios.get('http://localhost:3001/v1/destinations')
            .then(res => {
                this.setState({ destination: res.data });
                 console.log(this.state)
            })
        var d = []
        var self = this;

        var inter = setInterval( function () {
            if(self.state.destination !== undefined && self.state.destination !== null && self.state.destination.length !== 0){
                clearInterval(inter);
                var obj = self.filtrar();
                var inter3 = setInterval(function () {
                    if(obj !=null && obj.length !==0){
                        clearInterval(inter3);
                        obj[0].destinos.map((element, index) =>{
                            d.push({title: element.title, description: element.description})
                        })
                        self.setState({
                            data: obj
                        })
                        self.setState({
                            title: d,
                            description: d
                        })
                    }

                }, 100)

            }

        }, 1000)
    }
    filtrar(){
        return this.state.destination.filter(e =>{
            if(Number(e.commercial_id) === Number(this.props.param.id)){
                return e;
            }
        })
    }
    filtrar(){
        return this.props.data.filter(e =>{
            if(Number(e.commercial_id) === Number(this.props.param.id)){
                return e;
            }
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
