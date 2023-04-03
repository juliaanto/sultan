import { Block, BottomLineWrapper, Image, Price, PrimaryText, Property, SecondaryText, Span, Title } from "./catalog-product-card.styled";
import { ProductCount, ProductSize } from "../../components";
import { addProduct, getCartProducts, removeOneItem } from "../../store/products/productsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { AppLink } from "../../common/data/app-route";
import { Button } from "../../ui";
import { ButtonView } from "../../ui/button";
import { IProduct } from "../../types/product";
import { getProductCountInCart } from "../../common/helpers/cart";

interface CatalogProductCardProps {
  product: IProduct;
}

function CatalogProductCard({ product }: CatalogProductCardProps) {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(getCartProducts);
  const countInCart = getProductCountInCart(cartItems, product.barcode);
  
  return (
    <Block>
      <div>
        <Image src={process.env.PUBLIC_URL + product.imageUrl} alt={product.title} height={194} width={276} />
        <ProductSize sizeType={product.sizeType} size={product.size} />
        <Title to={AppLink.ProductById(product.barcode)}>
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
        {countInCart ?
          <ProductCount 
            count={countInCart} 
            onRemoveButtonClick={() => dispatch(removeOneItem(product.barcode))}
            onAddButtonClick={() => dispatch(addProduct({barcode: product.barcode, count: countInCart + 1}))}
          />
          :
          <Button 
            $view={ButtonView.AddToCart} 
            $width="153px" 
            $height="45px"
            onClick={() => dispatch(addProduct({barcode: product.barcode, count: 1}))}
          />
        }
      </BottomLineWrapper>
    </Block>
  );
}

export default CatalogProductCard;