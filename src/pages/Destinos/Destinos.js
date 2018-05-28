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
            destinos: [],
            data: null

        })
        var d = []
        var self = this;

        var inter = setInterval( function () {
            if(self.props.data !== undefined && self.props.data !== null && self.props.data.length !== 0){
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
        return this.props.data.filter(e =>{
            if(Number(e._id) === Number(this.props.param.id)){
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
