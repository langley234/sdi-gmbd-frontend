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
  useParams
} from "react-router-dom";
let mockData = {
  poster:'bad-url', title:'good-title'
}
function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/">
          <div className="App container">
            <div className="row">
              <NavBar className="col" />
            </div>
            <div className="row">
              <VideoList className="col-md-6 col-sm-12" url="http://localhost:3001/movies" />
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );

  function SingleVid() {
    let { videoId } = useParams();
    return <Video videoName={videoId}/>
  }
}

export default App;
