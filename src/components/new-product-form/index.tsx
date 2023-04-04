import { BottomLine, Form, Wrapper } from "./new-product-form.styled";
import { Button, Input, Select, Textarea } from "../../ui";

import { SizeType } from "../../common/data/size-type";
import { useState } from "react";

function NewProductForm() {
  const [productTypes, setProductTypes] = useState([]);

  const handleFormSubmit = (event: any) => {
    event.preventDefault();

    const newProduct = {
      barcode: Number(event.target.barcode.value),
      title: event.target.title.value,
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

    window.location.reload();
  }
  
  return (
    <Form onSubmit={handleFormSubmit} id="addNewProductForm">
      <Wrapper>
        <Input $label="Штрихкод" id="barcode" name="barcode" />
        <Input $label="Название" id="title" name="title" />
        <Input $label="Цена" id="price" name="price" type="number" />
      </Wrapper>
      <Wrapper>
        <Input $label="Бренд" id="brand" name="brand" />
        <Input $label="Производитель" id="producer" name="producer" />
        <Input $label="Тип ухода" id="productType" name="productType" />
      </Wrapper>
        <Wrapper>
        <Input $label="Url изображения" id="imageUrl" name="imageUrl" />
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
      </Wrapper>
      <BottomLine>
        <Textarea label="Описание" id="description" />
      </BottomLine>
      <Button type="submit">Добавить</Button>
    </Form>
  );
}

export default NewProductForm;