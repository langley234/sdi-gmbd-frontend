import { render, screen } from '@testing-library/react';
import App from './App';
import NavBar from './navBar.js';
import Video from './video.js';
import VideoList from './videoList';

const navBarExists = () => {
  const gmdbLinkElement = screen.getByRole(/gmdb/i);
  expect(gmdbLinkElement).toBeInTheDocument();

  const homeLinkElement = screen.getByRole(/home/i);
  expect(homeLinkElement).toBeInTheDocument();

  const loginLinkElement = screen.getByRole(/login/i);
  expect(loginLinkElement).toBeInTheDocument();
}

// ***************************** NAV BAR COMPONENT UNIT TESTS ********************************* //
test('NavBar renders a GMDB text', () => {
  render(<NavBar />);
  const gmdbLinkElement = screen.getByText(/gmdb/i);
  expect(gmdbLinkElement).toBeInTheDocument();
});

test('NavBar renders a home text', () => {
  render(<NavBar />);
  const gmdbLinkElement = screen.getByText(/home/i);
  expect(gmdbLinkElement).toBeInTheDocument();
});

test('NavBar renders a login text', () => {
  render(<NavBar />);
  const gmdbLinkElement = screen.getByText(/login/i);
  expect(gmdbLinkElement).toBeInTheDocument();
});

test('NavBar has a form', () => {
  render(<NavBar />);
  //const formElement = screen.getByRole('form');
  const formElement = screen.getByTestId('nav-bar-form');
  expect(formElement).toBeDefined();
});

test('NavBar has an input field to type search queries', () =>{
  render(<NavBar />);
  const inputElement = screen.getByRole('textbox');
  //textbox doesn't need to be reflected in the js code for this test to work aria label
  expect(inputElement).toBeDefined();
});

test('NavBar has an submit button to search queries', () =>{
  render(<NavBar />);
  const submitElement = screen.getByRole('button');
    //button doesn't need to be reflected in the js code for this test to work aria label
  expect(submitElement).toBeDefined();
});

// ***************************** END NAV BAR COMPONENT UNIT TESTS ********************************* //

// ***************************** START VIDEOLIST COMPONENT UNIT TESTS ********************************* //
test('VideoList does render', () => {
  let testVar = render(<VideoList />);
  expect(testVar).toBeDefined();
});

// test('VideoList returns error message if it cannot load videos', async () => {
//   render(<VideoList url="bad-url"/>);
//   await screen.findByText(/no data present/i);
//   let textElement = screen.findByText(/no data present/i);
//   expect(textElement).toBeInTheDocument();
// });
// ***************************** END VIDEOLIST COMPONENT UNIT TESTS ********************************* //

// ***************************** START VIDEO COMPONENT UNIT TESTS ********************************* //
test('Video should return error text if it cannot load the image for the video', async () => {
  //let mockData = {poster : "http://ia.media-imdb.com/images/M/MV5BMTgyODc2ODg0NF5BMl5BanBnXkFtZTgwNjExMzgyMDE@._V1_SX300.jpg" }
  let mockData = {poster: 'bad-url'};
  render(<Video data={mockData}/>);
  screen.findByText(/could not load image/i);
  let textElement = screen.findByText(/Could Not Load Image/i);
  expect(textElement).toBeInTheDocument();
});
// ***************************** END VIDEO COMPONENT UNIT TESTS ********************************* //

