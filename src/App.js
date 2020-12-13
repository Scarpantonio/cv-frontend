import "./App.css";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import Navigationbar from "./components/navbar/navbar";
import Contact from "./components/contact/contact";
import Work from "./components/work/Work";
import About from "./components/about/About";
import Home from "./components/home/Home";
import NotFoundPage from "./components/notFoundPage/notFoundPage";
import { AiFillBug, AiFillHeart, AiFillTrophy } from "react-icons/ai";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  DiPhotoshop,
  DiSass,
  DiNodejsSmall,
  DiGithubBadge,
  DiAtom,
  DiAngularSimple,
  DiJavascript1,
  DiHtml5,
  DiJqueryLogo,
  DiMongodb
} from "react-icons/di";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigationbar />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
