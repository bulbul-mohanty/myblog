import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions';


class PostCreate extends React.Component {

    state = { title: '', body: '', userId: '' };

    componentDidMount() {
        const userId = window.localStorage.getItem('id');
        this.setState({ userId: userId });
    }

    componentDidUpdate() {
        console.log(this.state.id);
    }

    onSubmit = (event) => {
        event.preventDefault();
        const userInfo = JSON.stringify({ title: this.state.title, body: this.state.body, userId: this.state.userId })
        this.props.createPost(userInfo);
    }

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.onSubmit}>
                    <div className="field">
                        <label>Title</label>
                        <input type="text" name="title" required placeholder="Title" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
                    </div>
                    <div className="field">
                        <label>Body</label>
                        <input type="text" required name="body" placeholder="Body" value={this.state.body} onChange={(e) => this.setState({ body: e.target.value })} />
                    </div>
                    <button className="ui button right" type="submit">Submit</button>
                    <p>{this.props.id > -1 ? 'successfully create with id ' + this.props.id : ''}</p>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    if (state.post.id > 0) {
        return { id: state.post.id };
    }
    else {
        return { id: -1 };
    }

}

export default connect(mapStateToProps, { createPost })(PostCreate);