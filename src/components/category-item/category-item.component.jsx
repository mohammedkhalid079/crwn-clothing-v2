import { Link } from "react-router-dom";
import "./category-item.styles.scss";
const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="category-body-container">
        <Link to={"/shop"}>
          <h2>{title}</h2>
          <p>shop Now</p>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
