import { Button, Input, Select, Textarea } from "../../ui";
import { ButtonWrapper, Form } from "./new-product-form.styled";

import { SizeType } from "../../common/data/size-type";
import { useState } from "react";

interface NewProductFormProps {
  handleSubmit: () => void;
}

function NewProductForm({handleSubmit}: NewProductFormProps) {
  const adminProductTypes = localStorage.getItem("productTypes");
  const productTypeValues: string[] = adminProductTypes ? JSON.parse(adminProductTypes) : [];
  const [productTypes, setProductTypes] = useState([]);


  const handleFormSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newProduct = {
      barcode: Number(event.target.barcode.value),
      title: event.target.title.valueOf,
      price: Number(event.target.price.value),
      brand: event.target.brand.value,
      producer: event.target.producer.value,
      imageUrl: event.target.imageUrl.value,
      productType: productTypes,
      sizeType: event.target.sizeType.value,
      size: event.target.size.value,
      description: event.target.description.value,
    }

    const productsJSON = localStorage.getItem("products");

    if (productsJSON) {
      const products = JSON.parse(productsJSON);
      products.push(newProduct);
      localStorage.setItem('products', JSON.stringify(products));
    } else {
      localStorage.setItem('products', JSON.stringify([newProduct]));
    }

    event.target.reset();
    handleSubmit();
  }
  
  return (
    <Form onSubmit={handleFormSubmit} id="addNewProductForm">
      <Input $label="Штрихкод" id="barcode" name="barcode" />
      <Input $label="URL изображения" id="imageUrl" name="imageUrl" />
      <Input $label="Название" id="title" name="title" />
      <Input $label="Цена" id="price" name="price" type="number" />
      <Input $label="Бренд" id="brand" name="brand" />
      <Input $label="Производитель" id="producer" name="producer" />
      <Select label="Тип размера" id="sizeType" options={[
        {
          valueId: String(SizeType.Volume),
          valueName: "Объем"
        },
        {
          valueId: String(SizeType.Weight),
          valueName: "Вес"
        },
      ]} />
      <Input $label="Размер" id="size" name="size" />
      <Select label="Назначение" id="" options={[
        {
          valueId: String(SizeType.Volume),
          valueName: "Уход за руками"
        },
        {
          valueId: String(SizeType.Weight),
          valueName: "Уход за лицом"
        },
      ]} />
      <Textarea label="Описание" id="description" />
      <ButtonWrapper>
        <Button type="submit" $width="100%">Добавить товар</Button>
      </ButtonWrapper>
    </Form>
  );
}

export default NewProductForm;