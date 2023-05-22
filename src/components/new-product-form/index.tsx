import { Button, Input, Select, Textarea } from "../../ui";
import { ButtonWrapper, Form, TextareaWrapper } from "./new-product-form.styled";

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
      title: event.target.productTitle.value,
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
    <Form
      onSubmit={handleFormSubmit}
      id="addNewProductForm"
    >
      <Input
        $label="Штрихкод"
        id="barcode"
        name="barcode"
        placeholder="Введите штрихкод"
      />
      <Input
        $label="URL изображения"
        id="imageUrl"
        name="imageUrl"
        placeholder="Введите URL изображения"
      />
      <Input
        $label="Название"
        id="productTitle"
        name="productTitle"
        placeholder="Введите название"
      />
      <Input
        $label="Цена"
        id="price"
        name="price"
        type="number"
        placeholder="Введите цену"
      />
      <Input
        $label="Бренд"
        id="brand"
        name="brand"
        placeholder="Введите бренд"
      />
      <Input
        $label="Производитель"
        id="producer"
        name="producer"
        placeholder="Введите производителя"
      />
      <Select
        label="Тип размера"
        id="sizeType"
        placeholder="Выберите тип размера"
        options={[
          {
            valueId: String(SizeType.Volume),
            valueName: "Объем"
          },
          {
            valueId: String(SizeType.Weight),
            valueName: "Вес"
          },
        ]}
      />
      <Input
        $label="Размер"
        id="size"
        name="size"
        placeholder="Введите размер"
      />
      <TextareaWrapper>
        <Textarea
          label="Описание"
          id="description"
          placeholder="Введите описание"
        />
      </TextareaWrapper>
      <Select
        label="Назначение"
        id=""
        placeholder="Выберите назначение"
        options={[
          {
            valueId: String(SizeType.Volume),
            valueName: "Уход за руками"
          },
          {
            valueId: String(SizeType.Weight),
            valueName: "Уход за лицом"
          },
        ]}
      />
      <ButtonWrapper>
        <Button
          type="submit"
          $width="100%"
        >
          Добавить товар
        </Button>
      </ButtonWrapper>
    </Form>
  );
}

export default NewProductForm;