import { AdminProductList, Heading, Modal, NewProductForm } from "../../components";
import { useEffect, useState } from "react";

import { Block } from "./admin.styled";
import { Button } from "../../ui";

function Admin() {
  useEffect(() => {
    document.title = "Управление списком товаров | Султан";
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <Block>
      <Heading>Товары</Heading>
      <Button onClick={() => setIsModalOpen(true)}>Добавить товар</Button>
      <Modal isOpen={isModalOpen} handleCloseClick={() => setIsModalOpen(false)}>
        <NewProductForm handleSubmit={() => setIsModalOpen(false)} />
      </Modal>
      <AdminProductList />
    </Block>
  );
}

export default Admin;