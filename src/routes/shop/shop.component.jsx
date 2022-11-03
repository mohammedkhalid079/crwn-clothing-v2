//react automatically entire json file stored inside Shop_Data.
// import SHOP_DATA from "../../shop-data.json";

import { Fragment, useContext, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
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
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {console.log(title)}
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
