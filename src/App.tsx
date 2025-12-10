import { Container, Row } from "react-bootstrap";
import "./App.css";
import { Bar } from "./Components/Bar";

function App() {
  return (
    <>
      <main>
        <Container>
          <section className="ToDo_section mt-50">
            <Row className="flex justify-center ">
              <div className="col-lg-6">
                <Bar />
              </div>
            </Row>
          </section>
        </Container>
      </main>
    </>
  );
}

export default App;
