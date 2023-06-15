import { Block, Form, InputWrapper, ProductType, ProductTypeWrapper, ProductTypesWrapper } from "./product-types.styled";
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
      <Form onSubmit={handleFormSubmit}>
        <InputWrapper>
          <Input name="newProductType" placeholder="Введите тип товара" />
        </InputWrapper>
        <Button type="submit">Добавить</Button>
      </Form>
      <ProductTypesWrapper>
        {productTypes.map((productType, index) => (
          <ProductTypeWrapper key={index}>
            <ProductType>{productType}</ProductType>
            <Button
              $view={ButtonView.Cross}
              onClick={() => handleRemoveButtonClick(productType)}
              $color={"#ededed"}
            />
          </ProductTypeWrapper>
        ))}
      </ProductTypesWrapper>
    </Block>
  );
}

export default ProductTypes;