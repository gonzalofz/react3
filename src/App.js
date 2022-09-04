import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Colaborators from "./components/Colaborators";
import { Container } from "react-bootstrap";
// import { Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Colaborators />
      </Container>
    </div>
  );
}

export default App;
