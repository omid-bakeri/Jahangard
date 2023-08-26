import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContectUs";
import About from "./Pages/About";
import Apps from "./Pages/Apps";
import PageNotFound from "./Pages/PageNotFound";
import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="Contact" element={<ContactUs />}></Route>
          <Route path="Apps" element={<Apps />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path="About" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
