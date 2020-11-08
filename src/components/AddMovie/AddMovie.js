import React, { Component } from 'react';
import { connect } from 'react-redux'




class AddMovie extends Component {

    state = {
        addMovie: {
            title: '',
            poster: '',
            description: '',
            genre: ''
        }
    }
    componentDidMount() {
        this.getGenres()
    }
    getGenres = () => {
        this.props.dispatch({ type: 'GET_GENRES' })
    }
    cancelAddMovie = () => {
        this.props.history.push('/')
    }

    handleChange = (propertyName, event) => {
        if (event === '') {// not allowing for empty inputs
            alert('Please enter all info');
            return;
        }
        this.setState({
            addMovie: {
                ...this.state.addMovie,
                [propertyName]: event.target.value
            }
        })
    }
    saveMovie = () => {

        this.props.dispatch({ type: 'ADD_MOVIE', payload: this.state.addMovie })
        
    }

    render() {
        return (
            <div>
                <h1>Add Movie!</h1>
                <input placeholder='Title' onChange={(event) => this.handleChange('title', event)}></input>
                <input placeholder='URL' onChange={(event) => this.handleChange('poster', event)}></input>
                <input placeholder='Description' onChange={(event) => this.handleChange('description', event)}></input>
                <label for="Genre">Choose a Genre:</label>
                <select id="Genre" name='Genre' onChange={(event) => this.handleChange('genre', event)} value={this.state.value}>
                   
                    {this.props.reduxState.genres.map((genre) => {
                        return <option key = {genre.id} value={genre.id}>{genre.name}</option>
                    })}
               </select>

                <br />
                <button className='cancelbtn' onClick={this.cancelAddMovie}>Cancel</button>
                <button onClick={this.saveMovie}>Save</button>
            </div>
        );
    }
}



const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AddMovie);
