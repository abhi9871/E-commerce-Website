import { useState, useEffect, Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Loader from "../../components/Loader/Loader";
import CategoryProductSlider from "../../components/Slider/CategoryProductSlider";
import {
  fetchCategories,
  fetchSpecificCategory,
} from "../../services/categoryApi";

const Products = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [categoryWiseProduct, setCategoryWiseProduct] = useState([]);
  const [productCategoryName, setProductCategoryName] = useState("");
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
      const name = e?.target?.value || categoryName || "electronics";
      navigate(`/products/categories/${name}`);
      setIsLoading(true);
      const fetchCategory = await fetchSpecificCategory(name);
      setCategoryWiseProduct(fetchCategory);
      setProductCategoryName(name);
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
          categoryName={productCategoryName}
        />
      )}
    </Fragment>
  );
};

export default Products;
