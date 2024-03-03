import { useState, useEffect, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Loader from "../../components/Loader/Loader";
import CategoryProductSlider from "../../components/Slider/CategoryProductSlider";
import {
  fetchCategories,
  fetchSpecificCategory,
} from "../../services/categoryApi";

const ProductPage = () => {
  const [categories, setCategories] = useState([]);
  const [categoryWiseProduct, setCategoryWiseProduct] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchCategory = async () => {
    try {
      const categoriesName = await fetchCategories();
      setCategories(categoriesName);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategoryProduct = async (e) => {
    try {
      const categoryName = e?.target?.value || "electronics";
      setIsLoading(true);
      const fetchCategory = await fetchSpecificCategory(categoryName);
      setCategoryWiseProduct(fetchCategory);
      setCategoryName(categoryName);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategory();
    fetchCategoryProduct();
  }, []);

  // Categorize products dynamically
  return (
    <Fragment>
      <Container>
        <h2 className="text-center fw-bold my-4">Categories</h2>
        <Row md={4} className="justify-content-evenly align-items-center my-4">
          {categories.map((category) => (
            <Col md={3} key={category} className="text-center mb-3">
              <Button
                key={category}
                variant="success"
                size="lg"
                value={category}
                onClick={fetchCategoryProduct}
              >
                {category.charAt(0).toUpperCase() + category.substring(1)}
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
      {isLoading ? (
        <Loader />
      ) : (
        <CategoryProductSlider
          categorizedProducts={categoryWiseProduct}
          categories={categories}
          categoryName={categoryName}
        />
      )}
    </Fragment>
  );
};

export default ProductPage;
