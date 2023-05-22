import { AdminProductList, Heading, Modal, NewProductForm } from "../../components";
import { Block, ButtonsWrapper } from "./admin.styled";
import { useEffect, useState } from "react";

import { Button } from "../../ui";

function Admin() {
  useEffect(() => {
    document.title = "Управление списком товаров | Султан";
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteAllProductsClick = () => {
    localStorage.removeItem('products');
    window.location.reload();
  }
  
  return (
    <Block>
      <Heading>Товары</Heading>
      <ButtonsWrapper>
        <Button onClick={() => setIsModalOpen(true)}>Добавить товар</Button>
        <Button onClick={handleDeleteAllProductsClick}>Удалить все товары</Button>
      </ButtonsWrapper>
      <Modal 
        isOpen={isModalOpen}
        title="Добавление товара"
        handleCloseClick={() => setIsModalOpen(false)}
      >
        <NewProductForm handleSubmit={() => setIsModalOpen(false)} />
      </Modal>
      <AdminProductList />
    </Block>
  );
}

export default Admin;