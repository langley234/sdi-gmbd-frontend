import logo from './logo.svg';
import './App.css';
import NavBar from './navBar';
import VideoList from './videoList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <VideoList url="http://localhost:3001/movies"/>
      <NavBar />
    </div>
  );
}

export default App;
