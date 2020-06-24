import React from 'react';
import { withRouter } from 'react-router-dom';

class Logout extends React.Component {
    state = { email: '' };

    componentDidMount() {
        this.goToHome();
    }

    goToHome = () => {
        window.localStorage.clear();
        this.props.history.push('/');
        this.props.updateAuthentication();
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default withRouter(Logout);