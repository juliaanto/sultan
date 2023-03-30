import { Block, HeadingWrapper, Wrapper } from "./catalog.styled";
import { Breadcrumbs, Heading, ProductList, SideFilter, TopFilter } from "../../components";
import { SortBy, sortProducts } from "../../common/helpers/sort";

import Page from "../../layout/page";
import Sorting from "../../components/sorting";
import { getFieldValues } from "../../common/helpers/products";
import { getProductsInCatalog } from "../../store/products/productsSlice";
import { productsJson } from "../../common/data/products";
import { useAppSelector } from "../../app/hooks";

function Catalog() {
  const initialProducts = sortProducts(SortBy.titleAsc, JSON.parse(productsJson));
  const products = useAppSelector(getProductsInCatalog);

  const productTypes = {
    filterName: "Бренд",
    filterCode: "productType",
    items: getFieldValues(initialProducts, "productType"),
  };
  
  const producers = {
    filterName: "Производитель", 
    filterCode: "producer",
    items: getFieldValues(initialProducts, "producer"),
  };

  return (
    <Page>
      <Block>
        <Breadcrumbs />
        <HeadingWrapper>
          <Heading>Косметика и гигиена</Heading>
          <Sorting />
        </HeadingWrapper>
        <TopFilter items={productTypes.items}/>
        <Wrapper>
          <SideFilter itemSets={[producers, productTypes]} />
          <ProductList products={products} />
        </Wrapper>
      </Block>
    </Page>
  );
}

export default Catalog;