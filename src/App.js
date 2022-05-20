import "./App.css";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Row from "./Components/Row";
import request from "./request";

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner />
      <Row
        title={"Netflix originals"}
        fetchUrl={request.originals}
        isLargeRow
      />
      <Row title={"Trending Now"} fetchUrl={request.trending} />
      <Row title={"Action Movies"} fetchUrl={request.actions} />
      <Row title={"Comedy Movies"} fetchUrl={request.RomanceMovies} />
      <Row title={"Horror Movies"} fetchUrl={request.HorrorMovies} />
      <Row title={"Comedy Movies"} fetchUrl={request.ComedyMovies} />
      <Row title={"Documentery Movies"} fetchUrl={request.Documentaries} />
    </div>
  );
}

export default App;
