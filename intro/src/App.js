import { Container, Row, Col } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

function App() {
  let titleCategory = "Category List";
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList title={titleCategory} />
          </Col>
          <Col xs="3">
            <ProductList title="Product List" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
