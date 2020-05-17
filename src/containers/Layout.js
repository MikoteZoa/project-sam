import React, {Component} from 'react'
import Navbar from './Navbar';
import MainContent from './MainContent';
import Axios from 'axios';
import Movie from 'components/Movie/Movie';
import Modal from 'components/UI/Modal';
import MovieDetails from 'components/Movie/MovieDetails';

class Layout extends Component {
  state = {
    MovieList: [],
    toggleMovieList: true,
    toggleModal: false,
    movieOverview: {},
  };

  makeApiCall = (searchItem) => {
    const url = `https://api.themoviedb.org/3/search/multi?api_key=3fc3ee4672b6d17d3a7edd56dd787f0f&language=en-US&include_adult=false&query=${searchItem}`;

    Axios.get(url).then((res) => {
      const results = res.data.results;
      let movieImageUrl;
      /** Will hold all our movies Components */
      let movieRows = [];

      /** Loop through all the movies */
      results.forEach((movie) => {
        /** Manually build our image url and set it on the Movie component. */
        if (movie.poster_path !== null && movie.media_type !== "person") {
          movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

          /** Set the movie object to our Movie component */
          const movieComponent = (
            <Movie
              movieDetails={() => this.selectMovieHandler(movie)}
              key={movie.id}
              movieImage={movieImageUrl}
              movie={movie}
            />
          )

          /** Push our movie component to our movieRows array */
          movieRows.push(movieComponent);
        }
      })
      /** Set our MovieList array to the movieRows array */
      this.setState({ MovieList: movieRows });
    }).catch(error => {
      console.log(error);
    });
  }

  onSearchHandler = (event) => {
    this.setState({
      toggleMovieList: false
    });

    const userInput = event.target.value;

    this.makeApiCall(userInput);

    if(userInput === '') {
      this.setState({
        toggleMovieList: true
      })
    };
  };

  selectMovieHandler = (movie) => {
    this.setState({
      toggleModal: true
    });

    let url;
    /** Make the appropriate API call to get the details for a single movie or tv show. */
    if (movie.media_type === "movie") {
      const movieId = movie.id;
      url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=3fc3ee4672b6d17d3a7edd56dd787f0f`;

    } else if (movie.media_type === "tv") {
      const tvId = movie.id
      url = `https://api.themoviedb.org/3/tv/${tvId}?api_key=3fc3ee4672b6d17d3a7edd56dd787f0f`;
    }

    Axios.get(url).then(res => {
      const movieData = res.data;

      this.setState({ movieOverview: movieData });
    }).catch(error => {
      console.log(error);
    });
  };

  closeModal = () => {
    this.setState({
      toggleModal: false
    });
  }

  render() {
    return (
      <div>
        <Navbar searchItem={this.onSearchHandler} />
        {
          this.state.toggleMovieList ? (
            <MainContent />
          ) : (
            <div className="search-container">
              {this.state.MovieList}
            </div>
          )
        }

        <Modal
          show={this.state.toggleModal}
          modalClosed={this.closeModal}
          movie={this.state.movieOverview}
        >
          <MovieDetails movie={this.state.movieOverview} />
        </Modal>
      </div>
    );
  }
}

export default Layout;