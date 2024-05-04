import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Top } from "./Top";
import { Login } from "./Login";
import { Home } from "./Home";
import { Article } from "./Article";
import { Profile } from "./Profile";
import { NotFound } from "./NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/article" element={<Article />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
