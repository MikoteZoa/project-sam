import React, { Component } from 'react'
import Header from '../components/Header';
import Axios from 'axios';
import NetflixOriginals from './NetflixOriginals';
import TopRated from './TopRated';

class MainContent extends Component {
  state = {
    selectedMovie: {},
  }

  componentDidMount() {
    this.getMovie();
  }

  getMovie = () => {
    const movieId = 77606;
    const language = 'ko-KR';

    const url = `https://api.themoviedb.org/3/tv/${movieId}?api_key=3fc3ee4672b6d17d3a7edd56dd787f0f&language=${language}`;
    
    Axios.get(url).then((res) => {
      console.log(res);
      this.setState({selectedMovie: res.data});
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div clssName="container">
        <Header
          movie={this.state.selectedMovie}
        />
        <div className="movieShowcase">
          <NetflixOriginals />
          <TopRated />
        </div>
      </div>
    );
  }
}

export default MainContent