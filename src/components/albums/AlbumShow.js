import React from 'react';
import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions';

class AlbumShow extends React.Component {

    componentDidMount() {
        this.props.fetchPhotos(this.props.match.params.id);
    }

    renderList = () => {
        return this.props.photos.map((photo) => {
            return (
                <div className='item' key={photo.id}>
                    <div className='content'>
                        <div className='description'>
                            <img src={photo.url} alt={photo.title}></img>
                            <h2>{photo.title}</h2>
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
    return { photos: state.photos }
}

export default connect(mapStateToProps, {fetchPhotos}) (AlbumShow);