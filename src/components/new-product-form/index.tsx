import { Button, Form, TextareaWrapper } from "./new-product-form.styled";
import { Dropdown, Input, Select, Textarea } from "../../ui";
import { addProduct, getProductTypes } from "../../store/admin/adminSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { SizeType } from "../../common/data/size-type";
import { useState } from "react";

interface NewProductFormProps {
  handleSubmit: () => void;
}

function NewProductForm({handleSubmit}: NewProductFormProps) {
  const productTypeValues = useAppSelector(getProductTypes);
  const dispatch = useAppDispatch();

  const [checkedProductTypes, setCheckedProductTypes] = useState<string[]>([]);

  const handleFormSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newProduct = {
      barcode: Number(event.target.barcode.value),
      title: event.target.productTitle.value,
      price: Number(event.target.price.value),
      brand: event.target.brand.value,
      producer: event.target.producer.value,
      imageUrl: event.target.imageUrl.value,
      productType: checkedProductTypes,
      sizeType: event.target.sizeType.value,
      size: event.target.size.value,
      description: event.target.description.value,
    }

    dispatch(addProduct(newProduct));

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
        options={[ SizeType.Volume, SizeType.Weight ]}
      />
      <Input
        $label="Размер"
        id="size"
        name="size"
        placeholder="Введите размер"
      />
      <Dropdown
        valueTitles={productTypeValues}
        onValueChange={(checkedValues) => setCheckedProductTypes(checkedValues)}
      />
      <TextareaWrapper>
        <Textarea
          label="Описание"
          id="description"
          placeholder="Введите описание"
        />
      </TextareaWrapper>
      <Button
        type="submit"
        $width="100%"
      >
        Добавить товар
      </Button>
    </Form>
  );
}

export default NewProductForm;