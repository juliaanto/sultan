import { Block, BottomLineWrapper, Image, Price, PrimaryText, ProductSize, ProductSizeWrapper, Property, SecondaryText, Span, Title } from "./product-card.styled";

import { Button } from "../../ui";
import { ButtonView } from "../../ui/button";
import { IProduct } from "../../types/product";
import { ReactComponent as IconBottle } from "../../assets/icons/bottle.svg";
import { ReactComponent as IconBox } from "../../assets/icons/box.svg";
import { SizeType } from "../../common/data/size-type";

interface ProductCardProps {
  product: IProduct;
}

function ProductCard({product}: ProductCardProps) {
  return (
    <Block>
      <div>
        <Image src={process.env.PUBLIC_URL + product.imageUrl} alt={product.title} height={194} width={280} />
        <ProductSizeWrapper>
          {product.sizeType === SizeType.volume ?
            <IconBottle />
            :
            <IconBox /> 
          }
          <ProductSize>{product.size}</ProductSize>
        </ProductSizeWrapper>
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
        <Button $view={ButtonView.addToCart} $width="153px" $height="45px" />
      </BottomLineWrapper>
    </Block>
  );
}

export default ProductCard;