import { AccentText, Block, ButtonsWrapper, Characteristics, CharacteristicsWrapper, Image, Information, InformationSpan, MainCharacteristicsWrapper, Parameter, ParameterValue, Price, PriceWrapper, SectionHeading, SectionHeadingWrapper, Span, Text, TextWrapper, Title, Wrapper } from "./product.styled";
import { Breadcrumbs, ProductCount, ProductSize } from "../../components";
import { addProduct, getCartProducts, getCatalogInitialProducts } from "../../store/products/productsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect, useState } from "react";

import { AppRoute } from "../../common/data/app-route";
import { Button } from "../../ui";
import { ButtonView } from "../../ui/button";
import { ReactComponent as IconShare } from "../../assets/icons/share.svg";
import { ReactComponent as IconTriangle } from "../../assets/icons/triangle.svg";
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
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isCharacteristicsOpen, setIsCharacteristicsOpen] = useState(false);

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
          <Image src={product.imageUrl} alt={product.title} height={600} width={650} />
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
            <ButtonsWrapper>
              <Button 
                $view={ButtonView.ProductPage}
                $width="77px"
                $height="77px"
                disabled
              >
                <IconShare />
              </Button>
              <Information>При покупке от <InformationSpan>10 000 ₸</InformationSpan> бесплатная доставка по Кокчетаву и области</Information>
              <Button $view={ButtonView.PriceListFromProductPage} disabled />
            </ButtonsWrapper>
            <MainCharacteristicsWrapper>
              <Characteristics>
                <Parameter>Производитель: <ParameterValue>{product.producer}</ParameterValue></Parameter>
                <Parameter>Бренд: <ParameterValue>{product.brand}</ParameterValue></Parameter>
                <Parameter>Артикул: <ParameterValue>{product.barcode}</ParameterValue></Parameter>
                <Parameter>Штрихкод: <ParameterValue>{product.barcode}</ParameterValue></Parameter>
              </Characteristics>
            </MainCharacteristicsWrapper>
            <SectionHeadingWrapper onClick={() => setIsDescriptionOpen(!isDescriptionOpen)} $isSectionOpen={isDescriptionOpen}>
              <SectionHeading>Описание</SectionHeading>
              <IconTriangle />
            </SectionHeadingWrapper>
            {isDescriptionOpen &&
              <Text>{product.description}</Text>
            }
            <CharacteristicsWrapper>
              <SectionHeadingWrapper onClick={() => setIsCharacteristicsOpen(!isCharacteristicsOpen)} $isSectionOpen={isCharacteristicsOpen}>
                <SectionHeading >Характеристики</SectionHeading>
                <IconTriangle />
              </SectionHeadingWrapper>
              {isCharacteristicsOpen &&
                <Characteristics>
                  <Parameter>Назначение: <ParameterValue>{product.productType.join(", ")}</ParameterValue></Parameter>
                  <Parameter>Тип: <ParameterValue>{product.productType.join(", ")}</ParameterValue></Parameter>
                  <Parameter>Производитель: <ParameterValue>{product.producer}</ParameterValue></Parameter>
                  <Parameter>Бренд: <ParameterValue>{product.brand}</ParameterValue></Parameter>
                  <Parameter>Артикул: <ParameterValue>{product.barcode}</ParameterValue></Parameter>
                  <Parameter>Штрихкод: <ParameterValue>{product.barcode}</ParameterValue></Parameter>
                  <Parameter>Вес: <ParameterValue>{product.size}</ParameterValue></Parameter>
                  <Parameter>Объем: <ParameterValue>{product.size}</ParameterValue></Parameter>
                  <Parameter>Кол-во в коробке: <ParameterValue>{product.size}</ParameterValue></Parameter>
                </Characteristics>
              }
            </CharacteristicsWrapper>
          </TextWrapper>
        </Wrapper>
      </Block>
    </Page>
  );
}

export default Product;