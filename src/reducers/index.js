import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import albumsReducer from './albumsReducer';
import usersReducer from './usersReducers';
import photosReducer from './photosReducer';
import commentsReducer from './commentsReducer';
import postReducer from './postReducer';

export default combineReducers({
    posts: postsReducer,
    albums: albumsReducer,
    users: usersReducer,
    photos: photosReducer,
    comments: commentsReducer,
    post:postReducer
});