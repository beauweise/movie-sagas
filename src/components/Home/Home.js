import React, { Component } from 'react';
import { connect } from 'react-redux'

class Home extends Component {



    componentDidMount() {
        this.getFavorites()
    }

    getFavorites = () => {
        this.props.dispatch({ type: 'GET_MOVIES' })
    }
    getDetails = (id,details, taco) => {
        console.log('get taco',taco);
        
        this.props.dispatch({ type: 'SET_MOVIE_DETAILS', payload: {id:id,details:details,taco:taco} });
        this.props.history.push('/Details');

    }

    render() {
        return (
            <div className='movies'>

                {/* {JSON.stringify(this.props.reduxState.movies)} */}
                {this.props.reduxState.movies.map((movie) => {
                    return <img className='movies' onClick={() => this.getDetails(movie.id,movie.poster, movie.description)}
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
