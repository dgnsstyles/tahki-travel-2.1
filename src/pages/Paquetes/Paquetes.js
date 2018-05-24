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
        axios.get('http://localhost:3001/v1/tours')
            .then(res => {
                this.setState({ tours: res.data });
                console.log(this.state)
            })
    }

    render(props) {
        return (
            <div>
                <TourList data={this.state.tours} {...props}/>

                <HeroPaquetes />
                <br/>
                <Divider horizontal><h2>Tours</h2></Divider>
                <br/>
                <ToursPaquetes/>
                <br/>
                <CardPaquetes/>
            </div>
        );
    }
}

export default Paquetes;
