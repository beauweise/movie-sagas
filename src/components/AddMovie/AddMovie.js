import React, { Component } from 'react';
import { connect } from 'react-redux'

class AddMovie extends Component {

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
               <input></input>
               <input></input>
               <input></input>
               <dropdown></dropdown>
               <button>Cancel</button>
               <button>Save</button>
            </div>
        );
    }
}



const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AddMovie);
