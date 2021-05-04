import {Component} from 'react'
import axios from 'axios'
import AddDestination from './AddDestination'
import Destination from './Destination'

class DestinationList extends Component {
    constructor () {
        super()
        this.state = {
            destinationArray: []
        }
    }

    componentDidMount(){
        axios.get('/api/travel') 
        .then((res) => {
            this.setState({destinationArray: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    deleteDestination = (id) => {
        axios.delete(`/api/travel/${id}`)
        .then((res) => {
            this.setState({destinationArray: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    addDestination = (location, description, image) => {
        axios.post('/api/travel', {location, description, image})
        .then((res) => {
            this.setState({destinationArray: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    addReview = (id, rating, review) => {
        axios.put(`/api/travel/${id}`, {rating, review})
        .then((res) => {
            this.setState({destinationArray: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                {this.state.destinationArray.map((destination) => {
                    return (
                        <Destination 
                        destination={destination} 
                        deleteDestination={this.deleteDestination}
                        addReview={this.addReview}
                        />
                    )
                })}
                <AddDestination addDestination={this.addDestination}/>
            </div>
        )
    }
}

export default DestinationList