import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchTopRated} from '../store/actions/index';
import {getMovieRows} from '../getMovie';

class TopRated extends Component {
  componentDidMount() {
    this.props.fetchTopRated();
  }

  render() {
    let _topRated;
    if (this.props._topRated.data) {
      const url = '/movie/top_rated?api_key=3fc3ee4672b6d17d3a7edd56dd787f0f&with_networks=213';
      _topRated = getMovieRows(this.props._topRated.data, url);
    }

    return (
      <>
        <h1 className="movieShowcase__heading">Top RATED</h1>
        <div className="movieShowcase__container">
          {_topRated}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {_topRated: state.topRated}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchTopRated}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TopRated);
