import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import AlbumShow from './albums/AlbumShow';
import AlbumList from './albums/AlbumList';
import PostList from './posts/PostList';
import PostShow from './posts/PostShow';
import Header from './Header';
import Auth from './Auth';
import Logout from './Logout';
import PostCreate from './posts/PostCreate';


class App extends React.Component {
    state = { logedIn: false };

    componentDidMount() {
        this.updateAuthentication();
    }

    updateAuthentication = () => {
        const userEmail = window.localStorage.getItem('email');
        if (userEmail) {
            this.setState({ logedIn: true });
        }
        else{
            this.setState({ logedIn: false });
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className='ui container' style={{ margin: '10px' }}>
                    <Header />
                    <div>
                        <Route path='/' exact >
                            <Auth updateAuthentication={this.updateAuthentication}></Auth>
                        </Route>
                        <Route path='/posts' exact component={PostList} />
                        <Route path='/posts/:id/comments' exact component={PostShow} />
                        <Route path='/posts/create' exact component={PostCreate} />
                        <Route path='/albums' exact component={AlbumList} />
                        <Route path='/albums/:id/photos' exact component={AlbumShow} />
                        <Route path='/logout' exact >
                        <Logout updateAuthentication={this.updateAuthentication}></Logout>
                        </Route>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;