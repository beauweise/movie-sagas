import React, { Component } from 'react';
import { connect } from 'react-redux'

class AddMovie extends Component {

    state = {
        addMovie: {
            title:'',
            url:'',
            description:'' 
        }
    }
    handleChange = (propertyName,event) => {
        this.setState({
            addMovie: {
              ...this.state.addMovie,
              [propertyName]: event.target.value
            }
          })
    }
    saveMovie = ()=>{
        
        this.props.dispatch({ type: 'GET_FAVORITES' })
    }

    render() {
        return (
            <div>
                <h1>Add Movie!</h1>
               <input placeholder='Title' onChange={(event) => this.handleChange('title',event) }></input>
               <input placeholder = 'URL' onChange={(event) => this.handleChange('url',event) }></input>
               <input placeholder = 'Description' onChange={(event) => this.handleChange('description',event) }></input>
               <br/>
               <button className = 'cancelbtn'>Cancel</button>
               <button onClick= {this.saveMovie}>Save</button>
            </div>
        );
    }
}



const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AddMovie);
