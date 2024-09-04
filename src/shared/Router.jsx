import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import MyLayout from "../components/MyLayout";
import MyProfile from "../components/MyProfile";
import MyLike from "../components/MyLike";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/my" element={<MyLayout />}>
          <Route path="profile" element={<MyProfile />} />
          <Route path="like" element={<MyLike />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
