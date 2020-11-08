import React, { Component } from 'react';
import { connect } from 'react-redux'

class Details extends Component {

    backButton = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>

                
                <img alt="" src={this.props.reduxState.oneMovie.image} />
                <br/>
               Genres:
                {this.props.reduxState.genres[0] ?
                    <>
                        {this.props.reduxState.genres.map((genre) => {
                            return <p  type = 'text' className = "genre" key={genre.id}> {genre.name}</p>
                        })}
                    </>
                    :
                    <p>crap</p>
                }
                <p>{this.props.reduxState.oneMovie.taco}</p>



                <br />
                <button onClick={this.backButton}>Back to List</button>
            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Details);
