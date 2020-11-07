import React, { Component } from 'react';
import { connect } from 'react-redux'

class Home extends Component {



    componentDidMount() {
        this.getFavorites()
    }

    getFavorites = () => {
        this.props.dispatch({ type: 'GET_MOVIES' })
    }
    getDetails = () =>{
        this.props.history.push('/Details');
    }

    render() {
        return (
            <div className = 'movies'>

                {/* {JSON.stringify(this.props.reduxState.movies)} */}
                {this.props.reduxState.movies.map((movie) => {
                    return <img onClick = {this.getDetails} key={movie.id} alt="" src={movie.poster} />
                })}
            </div>
        );
    }
}



const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Home);
