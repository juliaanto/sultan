import { Button, Form, TextareaWrapper } from "./new-product-form.styled";
import { Dropdown, Input, Select, Textarea } from "../../ui";
import { addProduct, editProduct, getProductTypes } from "../../store/admin/adminSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { IProduct } from "../../types/product";
import { SizeType } from "../../common/data/size-type";
import { useState } from "react";

interface NewProductFormProps {
  product?: IProduct;
  handleSubmit: () => void;
}

function NewProductForm({product, handleSubmit}: NewProductFormProps) {
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

    if (product) {
      dispatch(editProduct({product: newProduct, originalBarcode: product.barcode}));
    } else {
      dispatch(addProduct(newProduct));
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
        defaultValue={product && product.barcode}
      />
      <Input
        $label="URL изображения"
        id="imageUrl"
        name="imageUrl"
        placeholder="Введите URL изображения"
        defaultValue={product && product.imageUrl}
      />
      <Input
        $label="Название"
        id="productTitle"
        name="productTitle"
        placeholder="Введите название"
        defaultValue={product && product.title}
      />
      <Input
        $label="Цена"
        id="price"
        name="price"
        type="number"
        placeholder="Введите цену"
        defaultValue={product && product.price}
      />
      <Input
        $label="Бренд"
        id="brand"
        name="brand"
        placeholder="Введите бренд"
        defaultValue={product && product.brand}
      />
      <Input
        $label="Производитель"
        id="producer"
        name="producer"
        placeholder="Введите производителя"
        defaultValue={product && product.producer}
      />
      <Select
        label="Тип размера"
        id="sizeType"
        placeholder="Выберите тип размера"
        options={[ SizeType.Volume, SizeType.Weight ]}
        defaultValue={product && product.sizeType}
      />
      <Input
        $label="Размер"
        id="size"
        name="size"
        placeholder="Введите размер"
        defaultValue={product && product.size}
      />
      <Dropdown
        valueTitles={productTypeValues}
        initialValues={product && product.productType}
        onValueChange={(checkedValues) => setCheckedProductTypes(checkedValues)}
      />
      <TextareaWrapper>
        <Textarea
          label="Описание"
          id="description"
          placeholder="Введите описание"
          defaultValue={product && product.description}
        />
      </TextareaWrapper>
      <Button
        type="submit"
        $width="100%"
      >
        {product ? "Сохранить" : "Добавить товар"}
      </Button>
    </Form>
  );
}

export default NewProductForm;