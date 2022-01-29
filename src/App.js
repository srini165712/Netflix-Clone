import './App.css';
import Row from './Row'
import requests from './requests';
import Front from './Front'
import Navb from './Navb'

function App() {
  return (
    <div className="App">
      <Navb></Navb> 
      <Front></Front>
      <h1></h1>
      <Row title = 'NETFLIX ORIGINAL' fetchUrl = {requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>
      <Row title = 'TRENDING' fetchUrl = {requests.fetchTrending}></Row>
      <Row title = 'TOP RATED' fetchUrl = {requests.fetchTopRated}></Row>
      <Row title = 'ROMANCE' fetchUrl = {requests.fetchRomanceMovies}></Row>
      <Row title = 'COMEDY' fetchUrl = {requests.fetchComedyMovies}></Row>
      <Row title = 'ACTION' fetchUrl = {requests.fetchActionMovies}></Row>
      <Row title = 'HORROR' fetchUrl = {requests.fetchHorrorMovies}></Row>
      <Row title = 'DOCUMENTARY' fetchUrl = {requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
