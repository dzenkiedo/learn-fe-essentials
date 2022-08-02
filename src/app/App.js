import {AppHeader, AppFooter} from "../shared";
import About from "../pages/About";
import ErrorNotFound from "../pages/404";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Product from "../pages/Product";
import {Container, Stack} from "@mantine/core";
import './App.css';
import {Route, Routes} from "react-router-dom";

function App() {
  
  
  return (
    <Stack
      justify="flex-start"
      spacing="xs"
    >
      <AppHeader/>
      <Container fluid>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/catalog/:product" element={<Product/>}/>
          <Route path={`/catalog/?tag="кеды"`} element={<Catalog/>}/>
          <Route path={'*'} element={<ErrorNotFound/>}/>
        </Routes>
      </Container>
      <AppFooter/>
    </Stack>
  );
}

export default App;
