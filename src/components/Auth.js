import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchUsers } from '../actions';

class Auth extends React.Component {
    state = { email: '', errorMessage: '' };

    componentDidMount() {
        this.props.fetchUsers();
    }

    onSubmit = (event) => {
        event.preventDefault();
        let userIndex = this.props.users.findIndex(x => x.email.trim().toUpperCase() === this.state.email.toUpperCase())
        if (userIndex !== -1) {
            let user = this.props.users[userIndex]
            window.localStorage.setItem('email', user.email);
            window.localStorage.setItem('id', user.id)
            this.setState({ errorMessage: '' });

            this.props.history.push('/posts');
            this.props.updateAuthentication();
        }
        else {
            this.setState({ errorMessage: 'Invalid email' });
        }
    }

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.onSubmit}>
                    <div className='field'>
                        <input type="text" placeholder="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <button className='ui button right' >Login</button>
                    <p>{this.state.errorMessage}</p>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { users: state.users }
}


export default withRouter(connect(mapStateToProps, { fetchUsers })(Auth));