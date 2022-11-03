//react automatically entire json file stored inside Shop_Data.
// import SHOP_DATA from "../../shop-data.json";

import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
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
    </Routes>
  );
};

export default Shop;
