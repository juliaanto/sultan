import { Block, Form, ProductType, ProductTypeWrapper } from "./product-types.styled";
import { Button, Input } from "../../ui";
import { addProductType, getProductTypes, removeProductType } from "../../store/admin/adminSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { ButtonView } from "../../ui/button";

function ProductTypes() {
  const productTypes = useAppSelector(getProductTypes);
  const dispatch = useAppDispatch();

  const handleFormSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addProductType(event.target.newProductType.value));
    event.target.reset();
  }

  const handleRemoveButtonClick = (productType: string) => {
    dispatch(removeProductType(productType));
  }

  return (
    <Block>
      Тип товара:
      {productTypes.map((productType, index) => (
        <ProductTypeWrapper key={index}>
          <ProductType>{productType}</ProductType>
          <Button $view={ButtonView.Cross} onClick={() => handleRemoveButtonClick(productType)} />
        </ProductTypeWrapper>
      ))}
      <Form onSubmit={handleFormSubmit}>
        <Input $label="Новый тип товара" name="newProductType"/>
        <Button type="submit">Добавить</Button>
      </Form>
    </Block>
  );
}

export default ProductTypes;