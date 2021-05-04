import {Component} from 'react'

class AddDestination extends Component{
    constructor(){
        super()
        this.state = {
            location: '',
            description: '',
            image: '',
            rating: '',
            review: ''
        }
    }

    handleLocation = (value) => {
        this.setState({location: value})
    }

    handleDescription = (value) => {
        this.setState({description: value})
    }

    handleImage = (value) => {
        this.setState({image: value})
    }

    render(){
        return (
            <div className="addDestination"> 
                <h3> Add Destination </h3>

                <input 
                value={this.state.location}
                onChange={(e) => this.handleLocation(e.target.value)}
                placeholder='Location'
                /> 

                <input 
                value={this.state.description}
                onChange={(e) => this.handleDescription(e.target.value)}
                placeholder='Description'
                /> 
                
                <input 
                value={this.state.image}
                onChange={(e) => this.handleImage(e.target.value)}
                placeholder='Image URL'
                /> 

                <button onClick={() => {
                    this.props.addDestination(
                        this.state.location, 
                        this.state.description, 
                        this.state.image
                        )

                        this.setState({
                            location: '',
                            description: '',
                            image: ''
                        })
                    }
                    }> Add Destination </button>
            </div>
        )
    }
}

export default AddDestination