//react automatically entire json file stored inside Shop_Data.
// import SHOP_DATA from "../../shop-data.json";

import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import "./shop.styles.scss";

const Shop = () => {
  // const { searchFields } = useContext(CategoriesContext);
  // const [filteredProducts, setFilteredProducts] = useState(products);

  // const searchFieldsLowerCase = searchFields.toLocaleLowerCase();
  // console.log(searchFieldsLowerCase);

  // useEffect(() => {
  //   const newfilteredProducts = products.filter((product) => {
  //     return product.name.toLocaleLowerCase().includes(searchFieldsLowerCase);
  //   });
  //   setFilteredProducts(newfilteredProducts);
  // }, [products, searchFieldsLowerCase]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      {/* category is a variable. path will match to be unique string 
      you are trying to say hey i want parameter here means can access from a Category component
      and u say semicolon and then name of the variable*/}
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
