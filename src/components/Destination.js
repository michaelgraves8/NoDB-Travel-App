import {Component} from 'react'

class Destination extends Component {
    constructor(){
        super()
        this.state = {
            editMode: false,
            rating: '',
            review: '',
            imagePath: '../../assets/images/'
        }
    }

    handleRating = (value) => {
        this.setState({rating: value})
    }

    handleReview = (value) => {
        this.setState({review: value})
    }


    toggleEdit = () => {
        this.setState({editMode: !this.state.editMode})
    }

    handleSave = () => {
        this.props.addReview(this.props.destination.id, this.state.rating, this.state.review) 
        this.toggleEdit()
    }

    render(){
        return this.state.editMode ? (
            <div>
                <input 
                value={this.state.rating} 
                onChange={(e) => this.handleRating(e.target.value)}
                placeholder='Rating'
                />

                <input 
                value={this.state.review} 
                onChange={(e) => this.handleReview(e.target.value)}
                placeholder='Review'
                />

                <button onClick={this.handleSave}> Save </button>
            </div>
        ) : (
            <div>
                <h2> {this.props.destination.location} </h2>
                <p> {this.props.destination.description} </p>
                <img src={this.props.destination.image} alt={this.props.destination.location} />
                <h3> Rating: {this.props.destination.rating} </h3>
                <p> Review: {this.props.destination.review} </p>
                <button onClick={() => this.props.deleteDestination(this.props.destination.id)}> Delete Destination </button>
                <button onClick={() => this.toggleEdit()}> Add Rating/Review </button>
            </div>
        )
    }
}

export default Destination