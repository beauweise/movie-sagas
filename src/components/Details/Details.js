import React, { Component } from 'react';
import { connect } from 'react-redux'

class Details extends Component {

    backButton = () => {
        this.props.history.push('/');
    }

    // componentDidMount() {
    //     this.getFavorites()
    // }

    // getFavorites = () => {
    //     this.props.dispatch({ type: 'GET_FAVORITES' })
    // }

    render() {
        return (
            <div>
                <button onClick = {this.backButton}>Back to List</button>
            </div>
        );
    }
}



const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Details);
