import React, {Component} from 'react';
import { Link } from 'react-router-dom'


class ToursList extends Component {
    render() {
        console.log(this.props.data);
        return (
            <Link to={{
                pathname: `/paquetes/${props.path}`,
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
