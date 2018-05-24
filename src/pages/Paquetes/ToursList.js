import React, {Component} from 'react';
import { Link } from 'react-router-dom'


class ToursList extends Component {
    constructor(props){
        super(props);

        

    }


    render(props) {
        console.log(this.props.data);
        {/* Brings data to the console*/}
        return (
            <Link to={{
                pathname: `/paquetes/${this.props.path}`,
                state: { props }
            }}>
                <div>
                    {this.props.data.map(tour => (
                        <div key={tour._id}>
                            <h1>{tour.title}</h1>
                        </div>
                    ))}
                </div>
            </Link>

        )
    }
}

export default ToursList;
