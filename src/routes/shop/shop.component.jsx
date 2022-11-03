//react automatically entire json file stored inside Shop_Data.
// import SHOP_DATA from "../../shop-data.json";

import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
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
    <div className=" shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default Shop;
