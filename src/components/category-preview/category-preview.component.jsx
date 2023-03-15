import "./category-preview.styles.scss";
import ProductCard from "../product-card/product-card.component";
import { useNavigate } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  const chooseWithTitle = useNavigate();

  const particleProducts = () => chooseWithTitle(`${title}`);
  return (
    <div className="category-preview-container">
      <h2 onClick={particleProducts}>
        {/* title is a clickable that why we are written span inside h2 */}
        <span className="title">{title.toUpperCase()}</span>
      </h2>

      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
