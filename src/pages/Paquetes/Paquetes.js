import React, {Component} from 'react';
import { Divider} from 'semantic-ui-react';
import HeroPaquetes from './HeroComponents/HeroPaquetes'
import ToursPaquetes from './ToursPaquetes/ToursPaquetes'
import CardPaquetes from './CardPaquetes/CardPaquetes'
import axios from 'axios';

import TourList from './ToursList';


class Paquetes extends Component {

    constructor(props){
        super(props);

        this.state = {
            tours: []
        }
    }

    async componentDidMount() {
       const { data } = await axios.get('http://localhost:3001/v1/tours');
       this.setState({ tours: data});

    }

    render(props) {
        return (
            <div>
                <HeroPaquetes data={this.state.tours}/>
                <br/>
                <Divider horizontal><h2>Tours</h2></Divider>
                <br/>
                <ToursPaquetes data={this.state.tours} param={this.props.match.params}/>
                <br/>
                <CardPaquetes/>
            </div>
        );
    }
}

export default Paquetes;
