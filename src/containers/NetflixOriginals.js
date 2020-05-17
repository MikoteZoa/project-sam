import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {fetchNetflixOriginals} from '../store/actions/index';
import {connect} from 'react-redux';
import {getMovieRows} from '../getMovie';

class NetflixOriginals extends Component {
  componentDidMount() {
    this.props.fetchNetflixOriginals();
  }

  render() {
    let movies;
    if (this.props.movies.data) {
      const url = '/discover/tv?api_key=3fc3ee4672b6d17d3a7edd56dd787f0f&with_networks=213';
      movies = getMovieRows(this.props.movies.data, url);
    }

    return (
      <>
        <h1 className="movieShowcase__heading">NETFLIX ORIGINALS</h1>
        <div className="movieShowcase__container">
          {movies}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {movies: state.netflixOriginals}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchNetflixOriginals}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NetflixOriginals);
