import { AdminProductList, Heading } from "../../components";

import { Block } from "./admin.styled";
import { useEffect } from "react";

function Admin() {
  useEffect(() => {
    document.title = "Управление списком товаров | Султан";
  }, []);
  
  return (
    <Block>
      <Heading>Товары</Heading>
      <AdminProductList />
    </Block>
  );
}

export default Admin;