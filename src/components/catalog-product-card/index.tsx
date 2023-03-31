import { Block, BottomLineWrapper, Image, Price, PrimaryText, Property, SecondaryText, Span, Title } from "./catalog-product-card.styled";

import { Button } from "../../ui";
import { ButtonView } from "../../ui/button";
import { IProduct } from "../../types/product";
import { ProductSize } from "../../components";

interface CatalogProductCardProps {
  product: IProduct;
}

function CatalogProductCard({ product }: CatalogProductCardProps) {
  return (
    <Block>
      <div>
        <Image src={process.env.PUBLIC_URL + product.imageUrl} alt={product.title} height={194} width="auto" />
        <ProductSize sizeType={product.sizeType} size={product.size} />
        <Title to={"/"}>
          <Span>{product.brand} </Span>
          {product.title}
        </Title>
      </div>
      <div>
        <Property>
          <SecondaryText>Штрихкод: </SecondaryText>
          <PrimaryText>{product.barcode}</PrimaryText>
        </Property>
        <Property>
          <SecondaryText>Производитель: </SecondaryText>
          <PrimaryText>{product.producer}</PrimaryText>
        </Property>
        <Property>
          <SecondaryText>Бренд: </SecondaryText>
          <PrimaryText>{product.brand}</PrimaryText>
        </Property>
      </div>
      <BottomLineWrapper>
        <Price>{product.price.toLocaleString('ru-RU')} ₸</Price>
        <Button $view={ButtonView.AddToCart} $width="153px" $height="45px" $productBarcode={product.barcode} />
      </BottomLineWrapper>
    </Block>
  );
}

export default CatalogProductCard;