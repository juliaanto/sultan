import { Heading, NewProductForm, ProductTypes } from "../../components";

import { Block } from "./admin.styled";
import { useEffect } from "react";

function Admin() {
  useEffect(() => {
    document.title = "Управление списком товаров | Султан";
  }, []);
  
  return (
    <Block>
      <Heading>Товары</Heading>
      <ProductTypes />
      <NewProductForm />
    </Block>
  );
}

export default Admin;