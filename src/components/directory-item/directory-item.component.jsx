import "./directory-item.styles.scss";
import { useNavigate } from "react-router-dom";
const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  const getPro = useNavigate();

  const getProducts = () => getPro("/shop/" + `${title}`);
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="body" onClick={getProducts}>
        <h2>{title}</h2>
        <p>shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
