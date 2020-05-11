import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './containers/Homepage/Homepage';
import { connect } from 'react-redux'
import {
  FetchMovieGenreList
} from './store/actions/movie';
import {
  FetchTVGenreList
} from './store/actions/tv';
import Footer from './components/Footer/Footer';
import Errorpage from './containers/Errorpage/Errorpage';
import Moviepage from './containers/Moviepage/Moviepage';
import Showpage from './containers/Showpage/Showpage';
import AboutMoviepage from './containers/AboutMoviePage/AboutMoviepage';
import ScrollToTop from './ScrollToTop';
import AboutShowpage from './containers/AboutShowPage/AboutShowpage';

class App extends Component {
  componentDidMount() {
    this.props.onFetchTVGenreList()
    this.props.onFetchMovieGenreList()
  }
  render() {
    return (
      <BrowserRouter className="App">
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/movies/genre/:name/:id/:page" component={Moviepage} />
          <Route path="/shows/genre/:name/:id/:page" component={Showpage} />
          <Route path="/movie/:title/:id" component={AboutMoviepage} />
          <Route path="/show/:title/:id" component={AboutShowpage} />
          <Route component={Errorpage}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onFetchTVGenreList: () => dispatch(FetchTVGenreList()),
      onFetchMovieGenreList: () => dispatch(FetchMovieGenreList()),
  };
};

export default connect(null, mapDispatchToProps)(App);
