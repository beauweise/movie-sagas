import React, { Component } from 'react';
import { connect } from 'react-redux'

class Details extends Component {

    // state = {
    //     category: 0
    // }

    // componentDidMount() {
    //     this.getFavorites()
    // }

    // getFavorites = () => {
    //     this.props.dispatch({ type: 'GET_FAVORITES' })
    // }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}



const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Details);
