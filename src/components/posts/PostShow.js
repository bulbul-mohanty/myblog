import React from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions';

class PostShow extends React.Component {

    componentDidMount() {
        this.props.fetchComments(this.props.match.params.id);
    }

    renderList = () => {
        return this.props.comments.map((comment) => {
            return (
                <div className='item' key={comment.id}>
                    <div className='content'>
                        <div className='description'>
                            <h2>{comment.name}</h2>
                            <p>{comment.body}</p>
                            <h3>{comment.email}</h3>
                        </div>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div className='ui divided list'>
                {this.renderList()}
            </div>
        );
    }

};

const mapStateToProps = (state) => {
    return { comments: state.comments }
}

export default connect(mapStateToProps, { fetchComments })(PostShow);