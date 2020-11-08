import React, { Component } from 'react';
import { connect } from 'react-redux'

class Details extends Component {

    backButton = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                {/* {JSON.stringify(this.props.reduxState.genres)} */}

                <img alt="" src={this.props.reduxState.oneMovie.image} />
                <p>{this.props.reduxState.oneMovie.taco}</p>
                
                    {this.props.reduxState.genres[0] ?
                    <>
                        {this.props.reduxState.genres.map((genre) => {
                            return <p key={genre.id}> {genre.name}</p>
                        })}
                    </>
                        :
                        <p>crap</p>
                    }

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
