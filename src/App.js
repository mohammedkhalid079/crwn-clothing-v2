import { Route, Routes } from "react-router-dom";
import "./components/directory-item/directory-item.styles.scss";
import Home from "./routes/home-components/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";

import CheckOut from "./components/checkout/checkout.component";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./contexts/user.context";

const App = () => {
  const { currentUser } = useContext(UserContext);

  const [currBoo, setCurrBoo] = useState();

  useEffect(() => {
    setCurrBoo(currentUser);
  }, [currentUser]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index="true" element={currBoo ? <Home /> : <Authentication />} />
        <Route
          path="/shop/*"
          element={currBoo ? <Shop /> : <Authentication />}
        />
        <Route path="/auth" element={currBoo ? <Home /> : <Authentication />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
