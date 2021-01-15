/** por hacer
 *
 * [] Desplegar work/contact todo hacia la derecha.
 * [] Center submit button.
 * [] Connect to mongoose.
 * [] Email cuando la forma se envie.
 * [] Acomodar Navbar/footer
 * [X] Cambiar los botones de color.
 * [] Agregar animaciones.
 * [] Download my resume deberia estar unido con el footer.
 * [] PREGUNTAS HEROKU TED: como poder darle a deploy si dividimos ambos el front end y el back end.
 */

import "./App.css";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import Navigationbar from "./components/navbar/navbar";
import Contact from "./components/contact/contact";
import ContactMsl from "./components/contact-msl/Contact-msl";
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
          <Route path="/contact-msl" component={ContactMsl} />
          <Route path="/contact" component={Contact} />
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
