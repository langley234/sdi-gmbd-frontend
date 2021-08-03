import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './navBar';
import Video from './video';
import VideoList from './videoList';
import Login from './login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory
} from "react-router-dom";
let mockData = {
  poster:'bad-url', title:'good-title'
}



class App extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = {
      viewHomePage: true,
      viewSingleVid: false
    }
    this.videoClickCallback = this.videoClickCallback.bind(this);
  }

  // ********************************************** CALLBACKS ************************************ //
  videoClickCallback() {
    console.log('current URL ', window.location.href );
    this.setState({
      viewHomePage: false,
      viewSingleVid: true
    })
  }
// ********************************************** END CALLBACKS ************************************ //

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/videos">
            <Videos />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <NavBar />  
              <VideoList clickCallback={this.videoClickCallback} url="http://localhost:3001/movies" />
          </Route>
        </Switch>
      </Router>
    );
  }
}
  

function Videos() {
  let match = useRouteMatch();
  console.log('HERE', match.path);
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:videoId`}>
          <SingleVid />
        </Route>
        <Route path={match.path}>
          <h3>Please enter video ID</h3>
        </Route>
      </Switch>
    </div>
  );
}

function SingleVid() {
  console.log('NOW HERE ');
  let { videoId } = useParams();

  return <Video videoId={videoId}/>
  //return <h3>Requested Video ID: {videoId}</h3>;
}

export default App;
