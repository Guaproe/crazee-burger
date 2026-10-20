import { Route, Routes } from "react-router-dom";
import ErrorPage from "../components/pages/errorPage/ErrorPage";
import OrderPage from "../components/pages/orderPage/OrderPage";
import LoginPage from "../components/pages/login/LoginPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/order/:name" element={<OrderPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AllRoutes;
