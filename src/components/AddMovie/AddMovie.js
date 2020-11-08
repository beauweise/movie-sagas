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
                <h1>Add Movie!</h1>
               <input placeholder='Title'></input>
               <input placeholder = 'URL'></input>
               <input placeholder = 'Description'></input>
               <br/>
               <button className = 'cancelbtn'>Cancel</button>
               <button>Save</button>
            </div>
        );
    }
}



const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AddMovie);
