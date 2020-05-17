import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import DropdownContent from "components/DropdownContent";

import { ReactComponent as SearchLogo } from "../assets/img/search-icon.svg";
import NetflixLogo from "../assets/img/Netflix_Logo_RGB.png";
import { ReactComponent as BellLogo } from "../assets/img/bell-logo.svg";
import { ReactComponent as DropdownArrow } from "../assets/img/drop-down-arrow.svg";

class Navbar extends Component {
  state = {
    scrolling: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    if(window.scrollY === 0) {
      this.setState({scrolling: false});
    } else if(window.scrollY > 50) {
      this.setState({scrolling: true});
    }
  }

  render() {
    const { scrolling } = this.state;
    const { searchItem } = this.props;

    return (
      <nav className={"navigation " + (scrolling ? "black" : "")}>
        <ul className="navigation__container">
          <NavLink className="navigation__container-link" to="/" exact>
            <img
              className="navigation__container--logo"
              src={NetflixLogo}
              alt=""
            />
          </NavLink>
          <DropdownArrow className="navigation__container--downArrow-2"></DropdownArrow>
          <div className="navigation__container-link pseudo-link">Home</div>
          <div className="navigation__container-link pseudo-link">TV Shows</div>
          <div className="navigation__container-link pseudo-link">Movies</div>
          <div className="navigation__container-link pseudo-link">
            Recently Added
          </div>
          <div className="navigation__container-link pseudo-link">My List</div>

          <div className="navigation__container--left">
            <SearchLogo className="logo" />

            <input
              onChange={searchItem}
              //onChange={showMovies}
              className="navigation__container--left__input"
              type="text"
              placeholder="Title, genres, people"
            />
          </div>

          <div className="navigation__container-link pseudo-link">KIDS</div>
          <div className="navigation__container-link pseudo-link">DVD</div>
          <BellLogo className="navigation__container--bellLogo" />

          <DropdownContent />
          <DropdownArrow className="navigation__container--downArrow" />
        </ul>
      </nav>
    );
  }
}

export default Navbar;
