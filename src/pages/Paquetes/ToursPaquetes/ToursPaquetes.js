import React, {Component} from 'react';
import {Container, Tab} from 'semantic-ui-react'
import PropTypes from 'prop-types';
import DiaUno from '../DiasComponents/DiaUno'

class ToursPaquetes extends Component {

    constructor(props){
        super(props);
        this.state = {
            tabs: [],
            data: null
        }
    }

    componentDidMount(){

        var t = []
        var self = this;

        var inter = setInterval( function () {
            if(self.props.data !== undefined && self.props.data !== null && self.props.data.length !== 0){
                clearInterval(inter);
                var obj = self.filtrar();
                var inter2 =  setInterval(function(){
                    if(obj !=null && obj.length !=0){
                        clearInterval(inter2);
                        obj[0].days.map((element, index) => {
                            t.push({ menuItem: 'Dia ' + (index + 1), render: () => <Tab.Pane attached={false}><DiaUno data={element}/></Tab.Pane>});
                        })

                        self.setState({
                            data: obj
                        })
                        self.setState({
                            tabs: t
                        })
                    }
                }, 100)
            }

        }, 1000)
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
            <Container>
                <Tab menu={{ secondary: true, pointing: true}} panes={this.state.tabs}/>
            </Container>
        );
    }
}

ToursPaquetes.propTypes = {};

export default ToursPaquetes;



