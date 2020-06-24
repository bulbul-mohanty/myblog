import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = (userId) => {
    return async dispatch => {
        const response = await jsonPlaceholder.get('/users/' + userId + '/posts');
        dispatch({ type: 'FETCH_POSTS', payload: response.data });
    };
};

export const createPost = (post) => {
    return async dispatch => {
        const response = await jsonPlaceholder.post('/posts', post);
        dispatch({ type: 'CREATE_POST', payload: response.data });
    };
};

export const fetchAlbums = (userId) => {
    return async dispatch => {
        const response = await jsonPlaceholder.get('/users/' + userId + '/albums');
        dispatch({ type: 'FETCH_ALBUMS', payload: response.data });
    }
}

export const fetchUsers = () => {
    return async dispatch => {
        const response = await jsonPlaceholder.get('/users');
        dispatch({ type: 'FETCH_USERS', payload: response.data });
    }
}

export const fetchComments = (id) => {
    return async dispatch => {
        const response = await jsonPlaceholder.get('/posts/' + id + '/comments');
        dispatch({ type: 'FETCH_COMMENTS', payload: response.data });
    };
};

export const fetchPhotos = (id) => {
    return async dispatch => {
        const response = await jsonPlaceholder.get('/albums/' + id + '/photos');
        dispatch({ type: 'FETCH_PHOTOS', payload: response.data });
    }
}