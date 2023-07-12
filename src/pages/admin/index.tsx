import { AdminProductList, Heading, Modal, NewProductForm, ProductTypes } from "../../components";
import { Block, ButtonsWrapper } from "./admin.styled";
import { useEffect, useState } from "react";

import { Button } from "../../ui";
import { removeAllProducts } from "../../store/admin/adminSlice";
import { useAppDispatch } from "../../app/hooks";

function Admin() {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    document.title = "Управление списком товаров | Султан";
  }, []);

  enum ModalName {
    Closed,
    AddProduct,
    EditProductType
  }

  const [modal, setModal] = useState<ModalName>();

  const handleDeleteAllProductsClick = () => {
    dispatch(removeAllProducts());
  }
  
  return (
    <Block>
      <Heading>Товары</Heading>
      <ButtonsWrapper>
        <Button onClick={() => setModal(ModalName.AddProduct)}>Добавить товар</Button>
        <Button onClick={handleDeleteAllProductsClick}>Удалить все товары</Button>
        <Button onClick={() => setModal(ModalName.EditProductType)}>Редактировать типы товара</Button>
      </ButtonsWrapper>
      <Modal 
        isOpen={modal === ModalName.AddProduct}
        title="Добавление товара"
        handleCloseClick={() => setModal(undefined)}
      >
        <NewProductForm handleSubmit={() => setModal(undefined)} />
      </Modal>
      <Modal 
        isOpen={modal === ModalName.EditProductType}
        title="Редактирование типов товара"
        handleCloseClick={() => setModal(undefined)}
      >
        <ProductTypes />
      </Modal>
      <AdminProductList />
    </Block>
  );
}

export default Admin;