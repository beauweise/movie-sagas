import React, { Component } from 'react';
import { connect } from 'react-redux'

class Home extends Component {
    // getting data on page load
    componentDidMount() {
        this.getFavorites()
    }
    //getting data for page load from GET_MOVIES
    getFavorites = () => {
        this.props.dispatch({ type: 'GET_MOVIES' })
    }
    //getting details to be sent to details page on click of image
    //also redirecting page to details page
    getDetails = (id, image, details) => {
        this.props.dispatch({
            type: 'SET_MOVIE_DETAILS',
            payload: { id: id, image: image, details: details }
        });
        this.props.history.push('/Details');
    }

    render() {
        return (
            <div className='movies'>
                <h1>Movies!</h1>
                <p>Please Choose one for more details!</p>
                {/* mapping through movies which is coming from database */}
                {this.props.reduxState.movies.map((movie) => {
                    return <img className='movies'
                        onClick={() => this.getDetails(movie.id, movie.poster, movie.description)}
                        key={movie.id} alt="" src={movie.poster} />
                })}
            </div>
        );
    }
}



const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Home);
