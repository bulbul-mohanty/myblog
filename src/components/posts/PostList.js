import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import { Link } from 'react-router-dom';

class PostList extends React.Component {

    componentDidMount() {
        const userId = localStorage.getItem('id');
        this.props.fetchPosts(userId);
    }

    renderList = () => {
        return this.props.posts.map((post) => {
            return (
                <div className='item' key={post.id}>
                    <div className='content'>
                        <div className='description'>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </div>
                    <br/>
                    <div className='right floted content'>
                        <Link to={`/posts/${post.id}/comments`} className='item'>Comments</Link>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div>
                <div className=''>
                    <Link to='/posts/create' className='ui right floated '>Create New</Link>
                </div>
                <br/>
                <br/>
                <div className='ui divided list'>
                    {this.renderList()}
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostList);