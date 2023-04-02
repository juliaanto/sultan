import { AccentText, Block, Image, Price, PriceWrapper, Span, TextWrapper, Title, Wrapper } from "./product.styled";
import { Breadcrumbs, ProductCount, ProductSize } from "../../components";
import { addProduct, getCartProducts, getCatalogInitialProducts } from "../../store/products/productsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect, useState } from "react";

import { AppRoute } from "../../common/data/app-route";
import { Button } from "../../ui";
import { ButtonView } from "../../ui/button";
import Page from "../../layout/page";
import { getProductByBarcode } from "../../common/helpers/products";
import { getProductCountInCart } from "../../common/helpers/cart";
import { useParams } from "react-router-dom";

function Product() {
  const {id} = useParams();
  const products = useAppSelector(getCatalogInitialProducts);
  const barcode = Number(id);
  const product = getProductByBarcode(products, barcode);
  
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(getCartProducts);
  const countInCart = product && getProductCountInCart(cartItems, product.barcode);
  let initialCount = countInCart ? countInCart : 1;

  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    document.title = product ? product.brand + " " + product.title + " | Султан" : "Товар не найден";
  }, [product]);
  
  if (!product) {
    return (
      <Page>
        <Block>Товар не найден</Block>
      </Page>
    );
  }
  
  return (
    <Page>
      <Block>
        <Breadcrumbs 
          currentPageName={product.brand + " " + product.title}
          previousSections={[{
            pageName: "Каталог",
            pageLink: AppRoute.Catalog
          }]}
        />
        <Wrapper>
          <Image src={process.env.PUBLIC_URL + product.imageUrl} alt={product.title} height="auto" width={650} />
          <TextWrapper>
            <AccentText>В наличии</AccentText>
            <Title>
              <Span>{product.brand} </Span>
              {product.title}
            </Title>
            <ProductSize sizeType={product.sizeType} size={product.size} />
            <PriceWrapper>
              <Price>{product.price.toLocaleString('ru-RU')} ₸</Price>
              <ProductCount 
                count={count}
                disabled={count < 2}
                onRemoveButtonClick={() => setCount(count - 1)}
                onAddButtonClick={() => setCount(count + 1)}
              />
              <Button 
                $view={ButtonView.AddToCartFromProductPage} 
                $width="184px" 
                $height="59px"
                onClick={() => dispatch(addProduct({barcode: product.barcode, count}))}
              />
            </PriceWrapper>
          </TextWrapper>
        </Wrapper>
      </Block>
    </Page>
  );
}

export default Product;