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
// const addMovie =(state=[],action)=>{
//     switch (action.type) {
//         case 'ADD_MOVIE':
//             return action.payload;
//         default:
//             return state;
//     }
// }
// Create the watcherSaga generator function
function* watcherSaga() {
    yield takeEvery('GET_MOVIES', getMovies);
    yield takeEvery('SET_MOVIE_DETAILS', getGenres);
    yield takeEvery('ADD_MOVIE',addMovie)
}
function* addMovie(action) {
    console.log('hello from add addMovie', action.payload);
    try {
        yield axios.post('/api/movie/', action.payload);
        
    } catch (error) {
        console.log('error in post', error);
    }
}
function* getGenres(action) {
    
    try {
        console.log("!!!!!!!!!!!!!!!",action);
        
        const genreResponse = yield axios.get(`/api/genre/${action.payload.id}`);
        yield put({ type: 'SET_GENRES', payload: genreResponse.data })
    } catch (error) {
        console.log(error,action.payload.id);
    }
}

function* getMovies() {
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
