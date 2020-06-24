import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbums } from '../../actions';
import {Link} from 'react-router-dom';

class AlbumList extends React.Component {

    componentDidMount() {
        const userId = window.localStorage.getItem('id');
        this.props.fetchAlbums(userId);
    }

    renderList = () => {
        return this.props.albums.map((album) => {
            return (
                <div className='item' key={album.id}>
                    <div className='content'>
                        <div className='description'>
                            <h2>{album.title}</h2>
                        </div>
                    </div>
                    <br/>
                    <div className='right floted content'>
                        <Link to={`/albums/${album.id}/photos`} className='item'>Photos</Link>
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
    return { albums: state.albums }
}

export default connect(mapStateToProps, { fetchAlbums })(AlbumList);