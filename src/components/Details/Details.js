import React, { Component } from 'react';
import { connect } from 'react-redux'

class Details extends Component {
    //back button to fire and bring back to home page
    backButton = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>Movies!</h1>
                {/* image of selected movie coming from reducer that selected image */}
                <img alt="" src={this.props.reduxState.oneMovie.image} />
                <br/>
               Genres:
               {/* conditional rendering to make sure that there is a genres reducer that has info */}
                {this.props.reduxState.genres[0] ?
                    <>
                        {this.props.reduxState.genres.map((genre) => {
                            return <p type = 'text' className = "genre" key={genre.id}> {genre.name}</p>
                        })}
                    </>
                    :
                    <p>Go back to home page and select an image.</p>
                }
                <p type = 'text' className = 'details' >{this.props.reduxState.oneMovie.details}</p>
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
