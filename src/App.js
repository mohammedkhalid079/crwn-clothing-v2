import { Outlet, Route, Routes } from "react-router-dom";
import "./components/category-item/category-item.styles.scss";
import Home from "./routes/home-components/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/signIn.component";

const Shop = () => {
  return (
    <section>
      <h1>Hello i am child of Home page</h1>;
      <Outlet />
    </section>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index="true" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
