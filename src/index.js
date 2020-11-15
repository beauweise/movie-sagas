import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';



// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}
//Used to store selected move data
const oneMovie = (state = [], action) => {
    console.log('onemove set movie', state, action);

    switch (action.type) {
        case 'SET_MOVIE_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

function* watcherSaga() {
    yield takeEvery('GET_MOVIES', getMovies);
    yield takeEvery('SET_MOVIE_DETAILS', getGenres);
    yield takeEvery('ADD_MOVIE',addMovie);
    yield takeEvery('GET_GENRES',setGenres);
}
function* setGenres(action) {
    //getting genre to set on page load for the add movie page dropdown selection
    try {
        const genreResponse = yield axios.get(`/api/genre/`);
        yield put({ type: 'SET_GENRES', payload: genreResponse.data })
    } catch (error) {
        console.log(error,action.payload);
    }
}
function* addMovie(action) {
    //posting the added movie from AddMovie page and sending to server then to db
    try {
        yield axios.post('/api/movie/', action.payload);
        
    } catch (error) {
        console.log('error in post', error);
    }
}
function* getGenres(action) {
    //gets genres for selected image on homepage and matches from db
    try {
        const genreResponse = yield axios.get(`/api/genre/${action.payload.id}`);
        yield put({ type: 'SET_GENRES', payload: genreResponse.data })
    } catch (error) {
        console.log(error,action.payload.id);
    }
}

function* getMovies() {
    //gets movie from db then sends to SET_MOVIES reducer
    try {
        const movieResponse = yield axios.get(`/api/movieGenre`);
        yield put({ type: 'SET_MOVIES', payload: movieResponse.data });
    } catch (error) {
        console.log(error);
    }
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        oneMovie,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
